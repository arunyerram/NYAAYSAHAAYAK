// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// const Contact = () => {
//     const navigate = useNavigate();
//   const [isError, setIsError] = useState(false);
//   const [popup,setpopup] =useState(false)
//   const [formData, setFormData] = useState({
//     email: '',
//     subject:'',
//     message:'',
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:5000/submit-feedback', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         console.log('feedback submited successfully!');
//         // You can add further actions after successful booking, e.g., redirecting the user.
//       } else {
//         console.error('Error submitting feedback.');
//       }
//        navigate("/")
//       setpopup(true)
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };



//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//     console.log(formData)
//   };

//     return ( 
//         <>
//     <section className="contact" id="contact">

//             <div className="heading text-center">
//                 <h2>Contact Us</h2>
//                 <p>Feel free to get in touch for any questions or inquires. We would more than happy to assist you!</p>
//             </div>

//           <div className="row">

//                 <div className="col-md-5">

//                     <div className="title">
//                         <h3>Contact detail</h3>
//                     </div>

//                     <div className="content">
                        
//                         <div className="info">
//                             <i className="fas fa-mobile-alt"></i>
//                             <h4 className="d-inline-block">PHONE:
                                
//                                 <span>+91 8643452332 <br/> +91 7836816243</span></h4>
//                         </div>


//                         <div className="info mail">
//                             <i className="far fa-envelope"></i>
//                             <h4 className="d-inline-block">EMAIL:nyaaysahaayak@info.com</h4>
//                         </div>
                        
//                         <div className="info">
//                             <i className="fas fa-map-marker-alt"></i>
//                             <h4 className="d-inline-block">ADDRESS:
//                                 <span>
//                                     kmit,hyderabad,telangana,500029</span></h4>
//                         </div>

//                     </div>

//                 </div>


//                 <div className="col-md-7">
//                     <form>
//                         <div className="row">
                            
//                             <div className="col-sm-12 ">
//                                 <input type="email" onChange={handleChange} className="form-control" placeholder="Email"></input>
//                             </div>

//                             <div className="col-sm-12">
//                                 <input type="text" onChange={handleChange} className="form-control" placeholder="Subject"></input>
//                             </div>

//                         </div>

//                         <div className="form-group">
//                             <textarea className="form-control" onChange={handleChange} rows="5" id="comment" placeholder="Message"></textarea>
//                         </div>

//                         <button className="btn btn-block" type="submit" onClick={handleSubmit}>Send Now!</button>
//                     </form>
//                 </div>
//           </div>
//     </section>

//     <footer className="footer1">
//         <p>&copy; 2024 Nyaay Sahaayak Services</p>
//     </footer>

//     </>
//     );
// }
// export default Contact;









import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [popup, setPopup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);

    try {
      const response = await fetch("http://localhost:5000/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Feedback submitted successfully!");
        setPopup(true);
        setTimeout(() => {
          setPopup(false);
          navigate("/");
        }, 2000);
      } else {
        setIsError(true);
        console.error("Error submitting feedback.");
      }
    } catch (error) {
      setIsError(true);
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="heading text-center">
          <h2>Contact Us</h2>
          <p>
            Feel free to get in touch for any questions or inquiries. We would be more than happy to assist you!
          </p>
        </div>

        <div className="row">
          <div className="col-md-5">
            <div className="title">
              <h3>Contact Details</h3>
            </div>

            <div className="content">
              <div className="info">
                <i className="fas fa-mobile-alt"></i>
                <h4 className="d-inline-block">
                  PHONE:
                  <span>
                    +91 8643452332 <br /> +91 7836816243
                  </span>
                </h4>
              </div>

              <div className="info mail">
                <i className="far fa-envelope"></i>
                <h4 className="d-inline-block">EMAIL: nyaaysahaayak@info.com</h4>
              </div>

              <div className="info">
                <i className="fas fa-map-marker-alt"></i>
                <h4 className="d-inline-block">
                  ADDRESS:
                  <span> kmit, Hyderabad, Telangana, 500029</span>
                </h4>
              </div>
            </div>
          </div>

          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-12">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="col-sm-12">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Message"
                  required
                />
              </div>

              <button className="btn btn-block" type="submit">
                Send Now!
              </button>
            </form>

            {isError && <p className="error-message">Error submitting feedback. Please try again.</p>}
          </div>
        </div>

        {popup && (
          <div className="popup-message">
            <p>Feedback submitted successfully! Redirecting...</p>
          </div>
        )}
      </section>

      <footer className="footer1">
        <p>&copy; 2024 Nyaay Sahaayak Services</p>
      </footer>
    </>
  );
};

export default Contact;
