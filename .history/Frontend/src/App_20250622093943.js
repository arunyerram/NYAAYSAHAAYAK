import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.js';
import Law from './components/Law.js';
import About from './components/About.js';
import Service from './components/Service.js';
import MyChatbot from './components/chatbot/MyChatbot.js';
import Constitution from './components/TypesofLaws/Constitution.js';
import Civil from './components/TypesofLaws/Civil.js';
import Corporate from './components/TypesofLaws/Corporate.js';
import Criminal from './components/TypesofLaws/Criminal.js';
import Cyber from './components/TypesofLaws/Cyber.js';
import Environmental from './components/TypesofLaws/Environmental.js';
import Family from './components/TypesofLaws/Family.js';
import Feedback from './components/Feedback.js';
import Intellectual from './components/TypesofLaws/Intellectual.js';
import Labor from './components/TypesofLaws/Labor.js';
import Property from './components/TypesofLaws/Property.js';
import Tax from './components/TypesofLaws/Tax.js';
import LawTypes from './components/KeyFeatures/LawTypes.js';
import FAQ from './components/FAQs/FAQ.js';
import Login from './components/Login.jsx';
import Signup from './components/signup.jsx';
import KnowYourRights from './components/KeyFeatures/KnowYourRights.js';
import LegalAdvice from './components/KeyFeatures/LegalAdvice.js';
import Appointment from './components/KeyFeatures/Appointment.js';
import Session from './components/KeyFeatures/Session.js';
import Details from './components/KeyFeatures/Details.js';
import Contact from './components/Contact.js' 
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Law />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/about" element={<About />} />
        <Route path="/Appoint"element={<Appointment />} />
        <Route path="/services" element={<Service />} />
        <Route path="/chatbot" element={<MyChatbot />} />
        <Route path='/contact' element={ <Contact/>}/>
        <Route path="/KeyFeatures/LawTypes" element={<LawTypes />} />
        <Route path="/constitution" element={<Constitution />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/criminal" element={<Criminal />} />
        <Route path="/cyber" element={<Cyber />} />
        <Route path="/environment" element={<Environmental />} />
        <Route path="/family" element={<Family />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/intellectual" element={<Intellectual />} />
        <Route path="/labor" element={<Labor />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/rights" element={<KnowYourRights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/legaladvice" element={<LegalAdvice />} />
        <Route path="/Appoint" element={<Appointment />} />
        <Route path="/Session" element={<Session />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
