
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
        {/* <Chatbot
        config={Config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        /> */}
        {/* <Nav/> */}
        {/* <MyCarousel/> */}
          {/* <chatbot/> */}
        <MySearch/>
         <MyCarousel/>
         {/* <Footer/> */}

        

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





                {/* <div className="col-md-4 " style={{marginBottom:"20px"}}>
                    <Link to="/legaldocuments">
                <button className="lawsession   ">
                    <img src="data:image/jpeg;base64,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" className="img " alt="On-demand Legal Documents Logo" />
                   <h3 style={{fontSize:"25px"}} >On-demand Legal Documents</h3>
                    <p style={{color:"GrayText"}}>Obtain pre-drafted legal documents such as wills, power of attorney, and more.</p>
                </button>
                </Link>
                </div> */}



               




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