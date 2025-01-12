// import { useState } from 'react'
// import './App.css'
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
// import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react"
// import { FaMicrophone } from 'react-icons/fa'
// import { useSpeechSynthesis } from 'react-speech-kit'

// const API_KEY = "sk-1234ijkl1234ijkl1234ijkl1234ijkl1234ijkl";

// const systemMessage = {
//   "role": "system",
//   "content": "You have the Knowledge of  Career Guidance and Now you provide me the entire Career Guidance Path when user provides you with the Keywords of his desired role and answer correctly and Professionally with correct career path."
// }

// function Apps() {
//   const [messages, setMessages] = useState([
//     {
//       message: "Hello, I am a SAHAAYAK! Ask me about your legal queries",
//       sentTime: "just now",
//       sender: "LEGALASSISTANT"
//     }
//   ])

//   const [istyping, setIsTyping] = useState(false)

//   const handleSend = async (message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender: "user"
//     }

//     const newMessages = [...messages, newMessage]

//     setMessages(newMessages)
//     setIsTyping(true)
//     await processMessageToChatBOT(newMessages)
//   }

//   const processMessageToChatBOT = async (chatMessages) => {
//     const apiMessages = chatMessages.map((messageObject) => {
//       let role = ""
//       if (messageObject.sender === "LEGALASSISTANT") {
//         role = "assistant"
//       } else {
//         role = "user"
//       }
//       return { role: role, content: messageObject.message }
//     })

//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         systemMessage,
//         ...apiMessages
//       ]
//     }


//     try {
//       const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: "POST",
//         headers: {
//           "Authorization": "Bearer " + API_KEY,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(apiRequestBody)
//       })

//       const data = await response.json()

//       console.log(data)

//       setMessages([...chatMessages, {
//         message: data.choices[0].message.content,
//         sender: "LEGALASSISTANT"
//       }])
//       setIsTyping(false)
//     } catch (error) {
//       console.error("Error processing message:", error)
//     }
//   }

//   const { speak } = useSpeechSynthesis()
//   const handleOnClick = () => {
//     speak({ text: messages[messages.length - 1].message })
//   }

//   return (

//     <div className="App">
//       <button className="buttonStyle" onClick={handleOnClick} ><FaMicrophone /></button>
//       <div style={{ position: "center", height: "450px", width: "500px", alignItems: "corner" }} >
//         <MainContainer>
//           <ChatContainer>
//             <MessageList
//               scrollBehavior="smooth"
//               typingIndicator={istyping ? <TypingIndicator content="LEGAL Assistant is typing" /> : null}
//             >
//               {messages.map((message, i) => {
//                 return <Message key={i} model={message} />
//               })}
//             </MessageList>
//             <MessageInput placeholder='Type message here' onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//         <div color="blue" margin-top="50px">

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Apps;



import { useState } from 'react';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { FaMicrophone } from 'react-icons/fa';
import { useSpeechSynthesis } from 'react-speech-kit';

const API_KEY = "sk-1234ijkl1234ijkl1234ijkl1234ijkl1234ijkl";

const systemMessage = {
  "role": "system",
  "content": "You have the knowledge of career guidance and now you provide the entire career guidance path when the user provides you with the keywords of their desired role. Answer correctly and professionally with the correct career path."
};

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am SAHAAYAK! Ask me about your career queries.",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
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
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    };

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      });

      const data = await response.json();

      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "LEGALASSISTANT"
      }]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
      setIsTyping(false);
    }
  };

  const { speak } = useSpeechSynthesis();
  const handleOnClick = () => {
    speak({ text: messages[messages.length - 1].message });
  };

  return (
    <div className="App">
      <button className="buttonStyle" onClick={handleOnClick}><FaMicrophone /></button>
      <div style={{ position: "center", height: "450px", width: "500px", alignItems: "center" }}>
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
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;