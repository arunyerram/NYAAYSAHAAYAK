import React, { useState, useEffect,useRef } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { FaMicrophone } from 'react-icons/fa';
import { useSpeechSynthesis } from 'react-speech-kit';
import './App.css';
import { useNavigate } from "react-router-dom";
const API_KEY = "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";  // Replace with your actual API key

const systemMessage = {
  "role": "system",
  "content": "Answer to the questions which make sense of legal queries, laws, news, rights, regulations, terms as concisely as possible. If questions are out of these, provide an answer as I am here to provide information about legal data. You are a helpful and kind bot. Answer as concisely as possible with good content and tone. And you answer to the questions which are related to Legal Rights and Laws, Regulations in India only. You only answer questions related to Legal laws, news, regulations. Which question has a meaning regarding Legal rights, laws and news, queries, regulations, and terms, you answer them. If other topic questions are asked, then simply provide an answer as I am an assistant for providing only Legal News. And provide an answer to the user in the mentioned language. And by chance if the user does not provide you the language provide him the answer in all three languages that is Telugu, Hindi, and English languages separately. Answer to Laws Queries According to INDIA Country "
};

function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am SAHAAYAK! Ask me about your career queries.",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    if (isListening) {
      startListening();
    } else {
      stopListening();
    }
  }, [isListening]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);
    await processMessageToChatBOT(newMessages);
  };

  const processMessageToChatBOT = async (chatMessages) => {
    const apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "LEGALASSISTANT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "llama3-8b-8192",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {  // Adjusted endpoint
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();

      if (data && data.choices && data.choices.length > 0 && data.choices[0].message) {
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "LEGALASSISTANT"
        }]);
      } else {
        console.error("Unexpected response format:", data);
      }
      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
      setIsTyping(false);
    }
  };

  const handleOnClick = () => {
    speak({ text: messages[messages.length - 1].message });
  };

  // Initialize Speech Recognition
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('');

    setInputValue(transcript);

    if (event.results[0].isFinal) {
      handleSend(transcript);
      setIsListening(false);
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error", event);
    setIsListening(false);
  };

  const startListening = () => {
    recognition.start();
  };

  const stopListening = () => {
    recognition.stop();
  };

  return (
    <>
    <div className="App">
      <div className="buttonContainer">
      <button style={{ marginRight: '10px' }} onClick={handleOnClick}>
        <FaMicrophone /> Speak
      </button>

      <button onClick={() => setIsListening(prevState => !prevState)}>
        {isListening ? "Stop Listening" : "Listen"}
      </button>

      </div>
      <div style={{ height: "500px", width: "600px", alignItems: "center" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping ? <TypingIndicator content="LEGAL Assistant is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={{ message: message.message, sentTime: message.sentTime, sender: message.sender }} />
              })}
            </MessageList>
            <MessageInput 
              placeholder='Type message here' 
              value={inputValue}
              onChange={(val) => setInputValue(val)}
              onSend={handleSend} 
            />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>

    <button
    onClick={() => navigate(-1)} // Navigate to the previous route
    style={{
      position: "fixed",
      bottom: "20px",
      left: "20px",
      backgroundColor: "#FF5733",
      color: "white",
      padding: "10px 15px",
      borderRadius: "30px",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "bold",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      border: "none",
      cursor: "pointer",
    }}
    >
    Back
    </button>

    </>
  );
}

export default Chatbot;