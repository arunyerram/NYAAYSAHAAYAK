import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Law from './components/Law';
// import Apps from "./components/chatbot/Apps.jsx";
import About from './components/About';
// import Contact from './components/Login.jsx';
// import Footer from './components/Footer';
import Service from './components/Service';
import MyChatbot from './components/chatbot/Chat1.js';
import Constitution from './components/TypesofLaws/Constitution';
import Civil from './components/TypesofLaws/Civil';
import Corporate from './components/TypesofLaws/Corporate';
import Criminal from './components/TypesofLaws/Criminal';
import Cyber from './components/TypesofLaws/Cyber';
import Environmental from './components/TypesofLaws/Environmental';
import Family from './components/TypesofLaws/Family';
import Intellectual from './components/TypesofLaws/Intellectual';
import Labor from './components/TypesofLaws/Labor';
import Property  from './components/TypesofLaws/Property';
import Tax from './components/TypesofLaws/Tax';
import LawTypes from './components/KeyFeatures/LawTypes.js';
import FAQ from './components/FAQs/FAQ';
import Login from './components/Login.jsx';
// import Feedback from './components/Feedback.js'
// import Contact from './components/Contact.js'
import Signup from './components/signup.jsx';
import KnowYourRights from './components/KeyFeatures/KnowYourRights.js';
// import LegalNews from './components/KeyFeatures/LegalNews.js';
import LegalAdvice from './components/KeyFeatures/LegalAdvice.js';
// import LegalDocuments from './components/KeyFeatures/LegalDocuments.js';
// import LegalFiling from './components/KeyFeatures/LegalFiling.js';
import Appointment from './components/KeyFeatures/Appointment.js';
// import CaseManagement from './components/KeyFeatures/CaseManagement.js';
import Session from './components/KeyFeatures/Session.js';
import Details from './components/KeyFeatures/Details.js';
// import Header from './components/Header';

// import 
function App() {
  return (
    <Router basename="/">
    <div className="App">
      <Nav/>
      <div>
        <Routes>

          <Route path='/' element={ <Law/>}/>
          <Route path='/Nav' element={<Nav/>}/>
          <Route path='/about' element={ <About/>}/>
          {/* <Route path='/contact' element={ <Contact/>}/> */}
          <Route path='/services' element={ <Service/>}/>
          <Route path='/chatbot' element={ <MyChatbot/>}/>
          {/* <Route path='./footer' element={<Footer/>}/> */}
          <Route path='/KeyFeatures/LawTypes' element={ <LawTypes/>}/>
          <Route path='/constitution' element={ <Constitution/>}/>
          <Route path='/civil' element={ <Civil/>}/>
          <Route path='/corporate' element={ <Corporate/>}/>
          <Route path='/criminal' element={ <Criminal/>}/>
          <Route path='/cyber' element={ <Cyber/>}/>
          <Route path='/environment' element={ <Environmental/>}/>
          <Route path='/family' element={ <Family/>}/>
          <Route path='/intellectual' element={ <Intellectual/>}/>
          <Route path='/labor' element={ <Labor/>}/>
          <Route path='/tax' element={ <Tax/>}/>
          <Route path='/Property' element={<Property/>}/>
          <Route path='/rights' element={ <KnowYourRights/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/FAQ' element={<FAQ/>}/>
          {/* <Route path='/latestlegalnews' element={ <LegalNews/>}> </Route> */}
          <Route path='/legaladvice' element={<LegalAdvice/>}></Route>
          {/* <Route path='/legaldocuments' element={<LegalDocuments/>}></Route> */}
          {/* <Route path='/legalfiling' element={<LegalFiling/>}></Route> */}
          <Route path='/Appoint' element={<Appointment/>}></Route>
          {/* <Route path='/CaseManage' element={<CaseManagement/>}></Route> */}
          <Route path='/KnowYourRights' element={<KnowYourRights/>}></Route>
          {/* <Route path='/*' element= {<PageNotFound/>}></Route> */}
          {/* <Route path='/Feedback' element={<Feedback/>}></Route> */}
          <Route path='/Session' element={<Session/>}></Route>
          <Route path='/details' element={<Details/>}/>
          {/* <Route path='/Contact' element={<Contact/>}></Route>  */}
          {/* <Route path='/Header' element={<Header/>}></Route> */}
        </Routes>
      </div>
    </div>    
    </Router>
  );
}
export default App;