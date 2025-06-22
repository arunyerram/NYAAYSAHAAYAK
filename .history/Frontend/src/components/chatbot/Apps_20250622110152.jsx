// src/components/Apps.jsx

import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import { FaMicrophone } from 'react-icons/fa';
import { useSpeechSynthesis } from 'react-speech-kit';
import { useNavigate } from "react-router-dom";
import './css/App.css';

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content: `
You are SAHAAYAK, an expert assistant who answers ONLY questions about Legal Rights, Laws, Regulations, and legal information specific to India.

**What you do:**
- Respond only to queries about Indian legal rights, laws, rules, regulations, legal remedies, legal news, and official legal processes.
- Provide clear, concise, and factual information based on Indian law.
- When the user's question is about legal rights, laws, regulations, or legal terms in India, answer accurately and helpfully.
- If the user asks about language, reply in that language. If not specified, reply in Telugu, Hindi, and English separately.

**What you do NOT do:**
- Do NOT answer questions unrelated to law, legal rights, legal remedies, or Indian regulations.
- For any non-legal question, politely reply: "I'm here to provide assistance ONLY with legal rights, laws, and regulations in India. Please ask a question about legal matters."
- Always maintain a helpful, professional, and polite tone.

**Examples:**
- "What are my rights if I am arrested?" → legal rights under Indian law.
- "Who won the cricket match yesterday?" → redirect to legal-only message.
- "How to file a complaint about workplace harassment?" → legal remedies under Indian law.

**Language:**
- If the user specifies a language, answer in that language only.
- If not specified, provide answers in Telugu, Hindi, and English separately.
`
};

function Apps() {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(sessionStorage.getItem("user"));

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const [messages, setMessages] = useState([
    {
      message: "Hello, I am SAHAAYAK! Ask me about your legal queries.",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { speak } = useSpeechSynthesis();

  // Manage speech recognition toggling
  useEffect(() => {
    if (isListening) startListening();
    else stopListening();
  });

  const handleSend = async (text) => {
    const outgoing = { message: text, direction: "outgoing", sender: "user" };
    const updated = [...messages, outgoing];
    setMessages(updated);
    setInputValue("");
    setIsTyping(true);
    await processMessageToChatBOT(updated);
  };

  const processMessageToChatBOT = async (chatMsgs) => {
    const apiMessages = chatMsgs.map(msg =>
      msg.sender === "LEGALASSISTANT"
        ? { role: "assistant", content: msg.message }
        : { role: "user", content: msg.message }
    );

    const body = {
      model: "llama3-8b-8192",
      messages: [systemMessage, ...apiMessages]
    };

    try {
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content;
      if (reply) {
        setMessages([...chatMsgs, { message: reply, sender: "LEGALASSISTANT" }]);
      }
    } catch (err) {
      console.error("Chatbot error:", err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSpeak = () => {
    const last = messages[messages.length - 1]?.message;
    if (last) speak({ text: last });
  };

  // Speech recognition setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(r => r[0].transcript)
      .join("");
    setInputValue(transcript);
    if (event.results[0].isFinal) {
      handleSend(transcript);
      setIsListening(false);
    }
  };
  recognition.onerror = () => setIsListening(false);

  const startListening = () => recognition.start();
  const stopListening = () => recognition.stop();

  return (
    <>
      <div className="App">
        <div className="buttonContainer">
          <button onClick={handleSpeak} style={{ marginRight: 5 }}>
            <FaMicrophone /> Speak
          </button>
          <button onClick={() => setIsListening(prev => !prev)}>
            {isListening ? "Stop Listening" : "Listen"}
          </button>
        </div>
        <div style={{ height: 500, width: "100%", alignItems: "center" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? <TypingIndicator content="LEGAL Assistant is typing" /> : null
                }
              >
                {messages.map((msg, i) => (
                  <Message
                    key={i}
                    model={{
                      message: msg.message,
                      sentTime: msg.sentTime,
                      sender: msg.sender
                    }}
                  />
                ))}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                value={inputValue}
                onChange={val => setInputValue(val)}
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          backgroundColor: "#FF5733",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: 30,
          border: "none",
          cursor: "pointer"
        }}
      >
        Back
      </button>
    </>
  );
}

export default Apps;
