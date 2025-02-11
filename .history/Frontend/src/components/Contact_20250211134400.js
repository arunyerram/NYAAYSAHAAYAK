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




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.subject || !formData.message) {
            setError('All fields except Name are required.');
            return;
        }
        setError('');

        try {
            const response = await fetch('http://localhost:5000/submit-feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            } else {
                setError('Failed to submit. Try again later.');
            }
        } catch (error) {
            setError('Network error. Please try again.');
        }
    };

    return (
        <>
            <section className="contact" id="contact">
                <div className="heading text-center">
                    <h2>Contact Us</h2>
                    <p>Feel free to reach out for any inquiries or support. We're here to help!</p>
                </div>

                <div className="row">
                    {/* Contact Details Section */}
                    <div className="col-md-5">
                        <div className="title">
                            <h3>Contact Details</h3>
                        </div>
                        <div className="content">
                            <div className="info">
                                <i className="fas fa-phone"></i>
                                <h4>Phone: <span>+91 9848427033 | +91 7836816243</span></h4>
                            </div>
                            <div className="info">
                                <i className="far fa-envelope"></i>
                                <h4>Email: <span>nyaaysahaayak@info.com</span></h4>
                            </div>
                            <div className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4>Address: <span>KMIT, Hyderabad, Telangana, 500029</span></h4>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="col-md-7">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <input 
                                        type="text" 
                                        name="name" 
                                        className="form-control" 
                                        placeholder="Your Name (Optional)" 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form-control" 
                                        placeholder="Your Email *" 
                                        required 
                                        onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <input 
                                        type="text" 
                                        name="subject" 
                                        className="form-control" 
                                        placeholder="Subject *" 
                                        required 
                                        onChange={handleChange} 
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    className="form-control" 
                                    name="message" 
                                    rows="5" 
                                    placeholder="Your Message *" 
                                    required 
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            {error && <p className="error-message">{error}</p>}
                            {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}

                            <button className="btn btn-block" type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className="footer1">
                <p>&copy; 2024 Nyaay Sahaayak Services</p>
            </footer>
        </>
    );
};

export default Contact;
