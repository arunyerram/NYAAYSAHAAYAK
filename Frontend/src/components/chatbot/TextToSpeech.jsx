// import { useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import './App.css'
function TextToSpeech() {
//   const [text,setText] = useState('');
//   const {speak} = useSpeechSynthesis();

//   const handleOnClick = () => {
//     speak({text:text})
//   }

  return (
    <Container>
      <Segment>
        {/* <h1>Text to Speech Converter in React</h1> */}
        {/* <textarea className="textAreaStyle" onChange={(e)=>{setText(e.target.value)}}></textarea> */}
        {/* <button className="buttonStyle" onClick={()=>{handleOnClick()}}>Listen</button> */}
      </Segment>
    </Container>
  );
}

export default TextToSpeech;