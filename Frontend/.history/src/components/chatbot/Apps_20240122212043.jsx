import { useState } from 'react'
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import { useSpeechSynthesis } from 'react-speech-kit';



const API_KEY = "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";

const systemMessage = {

  "role": "system",
  "content": "You are A LEGAL ASSISTANT and Provide answers to queries which belong to Legal matters.Provide Answer as Good as Possible.If other than Legal questions are asked as query Simply Say I am a Legal Assistant so I can't provide answers."
};

function Apps() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I am a LEGAL ASSISTANT! Ask me about your legal queries",
      sentTime: "just now",
      sender: "LEGALASSISTANT"
    }
  ]);

  const [istyping, setIsTyping] = useState(false);

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

  // const [query, setQuery] = useState('');

  // const handleSpeechRecognition = () => {
  //   let recognition;

  //   if ('SpeechRecognition' in window) {
  //     recognition = new window.SpeechRecognition();
  //   } else if ('webkitSpeechRecognition' in window) {
  //     recognition = new window.webkitSpeechRecognition();
  //   } else {
  //     console.log('Speech recognition is not supported in this browser.');
  //     return;
  //   }

    // recognition.lang = 'en-US';

    // recognition.onresult = (event) => {
      // const transcript = event.results[0][0].transcript.trim();
      // setQuery(transcript);
    // };

    // recognition.start();
  // };

  const processMessageToChatBOT = async (chatMessages) => {
    // ... (unchanged code)
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

      console.log(data);

      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "LEGALASSISTANT"
      }]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error processing message:", error);
    }
  };

  const { speak } = useSpeechSynthesis();
  const handleOnClick = () => {
    speak({ text: messages[messages.length - 1].message });
  };

  return (
    <>
    
    
    
   
    <div className="App">
      <div style={{ position: "relative", height: "500px", width: "500px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={istyping ? <TypingIndicator content="LEGAL Assistant is typing" /> : null}
            >
              {messages.map((message, i) => {
                return <Message key={i} model={message} />;
              })}
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
        <div color="blue" margin-top="50px">
        {/* <button className="buttonStyle" onClick={handleOnClick} >Listen(ENGLISH)</button> */}
        </div>
      </div>
    </div>

    </>
  );
}

export default Apps;




// const API_KEY = "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";

// const systemMessage = {
//       "role": "system",
//       "content": "Answer to the questions which sense the meaning of legal queries,laws,news,rights,regulations,terms as concisely as possible. If questions are out of these provide answer as i am here to provide information about legal data You are a helpful and kind bot. Answer as concisely as possible with good content and tone. And You answer to the Questions which are related to Legal Rights and Laws ,Regulations in India only.You only answer to questions related to Legal laws, news , regulations.  Which Question has a meaning regarding Legal rights ,laws and news,queries,regulations and terms, you answer them . If Other topic questions are asked then simply provide answer as I am an assistant for providing only Legal News. And Provide answer to the user in the mentioned language. And by chance if the user does not provide you the language provide him the answer in all three languages that is  Telugu and hindi and English languages separately"
// }
// function Apps() {

//     const [messages, setMessages] = useState([
//       {
//         message: "Hello, I am a LEGAL ASSISTANT! Ask me About Your Legal Queries",
//         sentTime: "just now",
//         sender : "LEGALASSISTANT"
//       }


//     ]);
  
//   const [istyping, setIsTyping] = useState(false);


//   const handleSend = async(message) => {
//     const newMessage = {
//       message,
//       direction: 'outgoing',
//       sender : "user"
//     };

//     const newMessages = [...messages, newMessage];

//     setMessages(newMessages);

//     setIsTyping(true);

//     await processMessageToChatBOT(newMessages);
//   };

//   async function processMessageToChatBOT(chatMessages) {

//   // console.log('sdfsdf')
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role="";
//       if (messageObject.sender === "LEGALASSISTANT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message }
//     });



//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages" : [
//         systemMessage,
//         ...apiMessages
//       ]
//     }

//     await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + API_KEY,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(apiRequestBody)
      
//     }).then((data) => {
//       return data.json();
//     }).then((data) => {
        
        
//       console.log(data);

//       function TextToSpeech() {
//         const [text,setText] = useState('');
//         const {speak} = useSpeechSynthesis();
      
//         const handleOnClick = () => {
//           speak({text:text})
//         }
//       console.log(data.choices[0].message.content);
//       setMessages([...chatMessages, {
//           message: data.choices[0].message.content,
//           sender: "LEGALASSISTANT"
//         }]);
//       setIsTyping(false);
//     });
//   }

//   // function TextToSpeech() {
//   //   // const [text,setText] = useState('');
//   //   const {speak} = useSpeechSynthesis();
  
//   //   const handleOnClick = () => {
//   //     speak({text:text})
//   //   }
  
//   //   return (
//   //     <Container>
//   //       <Segment>
//   //         <h1>Text to Speech Converter in React</h1>
//   //         <textarea className="textAreaStyle" onChange={(e)=>{setText(e.target.value)}}></textarea>
//   //         <button className="buttonStyle" onClick={()=>{handleOnClick()}}>Listen</button>
//   //       </Segment>
//   //     </Container>
//   //   );
//   // }


//   return (
//     <div className="App">
//       <div style = {{ position : "relative" , height : "700px", width : "1200px"}}>
        
//         <MainContainer>
//           <ChatContainer >
//             <MessageList
//             scrollBehavior="smooth"
//             typingIndicator={istyping ? <TypingIndicator content="LEGAL Assistant is typing" /> : null}
//             >
//               {messages.map((message, i) => {


//                 console.log(message)
//                 return <Message key={i} model={message} />
//               })}
//             </MessageList>
//             <MessageInput placeholder='Type message here' onSend={handleSend} />
//           </ChatContainer>
//         </MainContainer>
//         <button className="buttonStyle" onClick={()=>{handleOnClick()}}>Listen</button>
//       </div>
//     </div>

//   )
// }

// export default Apps;






















































































































































































































































