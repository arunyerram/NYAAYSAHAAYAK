
import MyCarousel from "./MyCarousel";
import MySearch from "./MySearch";
import React from 'react';
import 'react-chatbot-kit/build/main.css';
import {Link} from "react-router-dom";
import Footer from './Footer';
import { useNavigate } from "react-router-dom";


const Law = () => {
    const navigate = useNavigate();
    return ( 
        <>
        <MySearch/>
        <MyCarousel/>
    <main>
        <section className= "container1">
            {/* <h2 className="text-center" style={{marginBottom:"20px"}}>Key Features</h2> */}
            <div className="row"> 
                <div className="col-md-4  " style={{marginBottom:"20px"}}>
                    <Link to="/KeyFeatures/LawTypes">
                    <button className="lawsession">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702632300/ecwbq7oxj2e0nuez44ec.jpg" className="img" alt="Online Marketplace Logo" />
                    <h3 style={{fontSize:"25px"}}>Laws</h3>
                    <p style={{color:"GrayText"}}>Different types of laws and their info.</p></button>
                    </Link>
                </div>

                <div className="col-md-4  " style={{marginBottom:"20px"}}>
                <Link to="/chatbot">
                    <button className="lawsession">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9fdd26PxxIM7ZZTR0LVW4g9noEqWele_WxA&usqp=CAU" className="img" alt="AI Assistant Logo" />
                        <h3 style={{fontSize:"25px"}}>LEGAL ASSISTANT</h3>
                        <p style={{color:"GrayText"}}>Explore the  solutions to simplify your legal processes and make informed decisions.</p>
                    </button>
                </Link>
                </div>


                <div className="col-md-4 "style={{marginBottom:"20px"}}>
            <Link to="/rights">
                <button className="lawsession">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702546813/know_bgrbmv.png" className="img" alt="Know Your Rights Logo" />
                    <h3 style={{fontSize:"25px"}}>Know Your Rights</h3>
                    <p style={{color:"GrayText"}}>Explore ALL Your Rights</p>
                </button>
            </Link>
                </div>



                <div className="col-md-6 " style={{marginBottom:"20px",marginTop:"20px", }}>
                    <Link to="/legaladvice">
                <button className="lawsession  ">
                    <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1702545340/advice_s6ry5c.jpg" className="img" alt="Real-time Legal Advice Logo" />
                    <h3 style={{fontSize:"25px"}}>Legal Advice For Solving Cases</h3>
                    <p style={{color:"GrayText"}}> </p>
                    </button>
                    </Link>
                </div>

                              <div className="col-md-6 " style={{marginBottom:"30px", marginTop:"20px"}}>
                    <Link to="/Appoint">
                <button className="lawsession  ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1sGSmcfw0KICe9HUXlgrzPcZIUedP9VWWOQ&usqp=CAU" className="img" alt="Online Appointment Booking Logo" />
                    <div>
                    <h3 style={{fontSize:"25px"}}>Online Appointment Booking</h3>
                    <p style={{color:"GrayText"}}>Book a consultation with a legal expert through our secure and user-friendly online platform.</p>
                    </div>
                    </button>
                    </Link>
                </div>
            </div>
        </section>
    </main>

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


    <Footer/>
    
    {/* <Feedback/> */}

        </>
    );
}

export default Law;