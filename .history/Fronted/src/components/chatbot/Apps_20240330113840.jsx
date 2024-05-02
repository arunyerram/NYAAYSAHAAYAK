import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
import { FaMicrophone } from 'react-icons/fa'
import { useSpeechSynthesis } from 'react-speech-kit'
import SpeechToText from "./SpeechToText.jsx";
const API_KEY =  "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";

const systemMessage = {
  "role": "system",
  "content": "Answer to the questions which make sense of legal queries, laws, news, rights, regulations, terms as concisely as possible. If questions are out of these, provide an answer as I am here to provide information about legal data. You are a helpful and kind bot. Answer as concisely as possible with good content and tone. And you answer to the questions which are related to Legal Rights and Laws, Regulations in India only. You only answer questions related to Legal laws, news, regulations. Which question has a meaning regarding Legal rights, laws and news, queries, regulations, and terms, you answer them. If other topic questions are asked, then simply provide an answer as I am an assistant for providing only Legal News. And provide an answer to the user in the mentioned language. And by chance if the user does not provide you the language provide him the answer in all three languages that is Telugu, Hindi, and English languages separately. Answer to Laws Queries According to INDIA Country "
}

function Apps() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am a SAHAAYAK! Ask me about your legal queries",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ])

  const [istyping, setIsTyping] = useState(false)

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    }

    const newMessages = [...messages, newMessage]

    setMessages(newMessages)
    setIsTyping(true)
    await processMessageToChatBOT(newMessages)
  }

  const processMessageToChatBOT = async (chatMessages) => {
    const apiMessages = chatMessages.map((messageObject) => {
      let role = ""
      if (messageObject.sender === "LEGALASSISTANT") {
        role = "assistant"
      } else {
        role = "user"
      }
      return { role: role, content: messageObject.message }
    })

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      })

      const data = await response.json()

      console.log(data)

      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "LEGALASSISTANT"
      }])
      setIsTyping(false)
    } catch (error) {
      console.error("Error processing message:", error)
    }
  }

  const { speak } = useSpeechSynthesis()
  const handleOnClick = () => {
    // console.log();
    speak({ text: messages[messages.length - 1].message })
  }

  return (

    <div className="App">
      <button className="buttonStyle" onClick={handleOnClick} ><FaMicrophone /></button>
      <div style={{ position: "center", height: "450px", width: "500px", alignItems: "corner" }} >
        <SpeechToText>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={istyping ? <TypingIndicator content="LEGAL Assistant is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
        </SpeechToText>
        <div color="blue" margin-top="50px">

        </div>
      </div>
    </div>
  )
}

export default Apps;

