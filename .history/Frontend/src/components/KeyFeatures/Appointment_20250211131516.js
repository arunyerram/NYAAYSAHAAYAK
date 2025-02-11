import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Appointment.css';
import { useNavigate } from "react-router-dom";
const LoginPopup = ({ onClose }) => {
  return (
    <div className="login-popup">
      <p>Login first to schedule a consultation</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const Appointment = () => {
  const [showPopup, setShowPopup] = useState(false);

  const HandleLogin = () => {
    if (!sessionStorage.getItem("userId")) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <h1>Book an Appointment Session with Legal Professionals</h1>

      <div className="row"> 
        <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://content.jdmagicbox.com/comp/def_content/lawyers/default-lawyers-5.jpg" className="Lawyer" alt="Logo" width="320px" height="270px"/>
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{fontSize:"25px"}}>Abhishek Singhvi.</h3>
              <h3 style={{fontSize:"25px"}}>15+ YOE</h3> 
              <h3 style={{fontSize:"25px"}}>J.D., Harvard Law School</h3>
              <h4 style={{fontSize:"25px"}}>Corporate Law, Mergers and Acquisitions</h4>
              <p style={{color:"GrayText"}}></p>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>

        <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://cdn.pixabay.com/photo/2023/06/19/01/42/ai-generated-8073256_1280.png" className="Lawyer" alt="Logo" width="320px" height="270px"/>
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{fontSize:"25px"}}>K. K. Venugopal.</h3>
              <h3 style={{fontSize:"25px"}}>12+ YOE</h3> 
              <h3 style={{fontSize:"25px"}}>Yale Law School</h3>
              <h4 style={{fontSize:"25px"}}>Intellectual Property, Patent Law</h4>
              <p style={{color:"GrayText"}}></p>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>

        <div className="col-md-4" style={{marginBottom:"20px", marginTop:"50px"}}>
          <button className="lawsession" onClick={HandleLogin}>
            <Link to="/Session">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLcnOMPXORO_chgjriJjhkNs8lzHYv2UfUHL6hch8c_JmbFBm-lKs73xkEh_MV7Tdtlo0&usqp=CAU" alt="Logo" width="320px" height="270px"/>
            </Link>
          </button>
          <div className="detail">
            <span>
              <h3 style={{fontSize:"25px"}}>Fali Sam Nariman.</h3>
              <h3 style={{fontSize:"25px"}}>10+ YOE</h3> 
              <h3 style={{fontSize:"25px"}}>StanFord Law School</h3>
              <h4 style={{fontSize:"25px"}}>Criminal Law, Civil Litigation</h4>
              <p style={{color:"GrayText"}}></p>
            </span>
          </div>
          <div className="register-button">
            <button className="Regis" onClick={HandleLogin}>
              Register now
            </button>
          </div>
        </div>
      </div>

      {showPopup && <LoginPopup onClose={closePopup} />}
    </>
  );
}

export default Appointment;
