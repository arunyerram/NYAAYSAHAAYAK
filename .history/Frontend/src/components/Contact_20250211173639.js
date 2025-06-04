// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Contact = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.email || !formData.subject || !formData.message) {
//       setError("All fields except Name are required.");
//       return;
//     }
//     setError("");

//     try {
//       const response = await fetch("http://localhost:5000/submit-contact-us", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//         setTimeout(() => {
//           navigate("/");
//         }, 2000);
//       } else {
//         setError("Failed to submit. Try again later.");
//       }
//     } catch (error) {
//       setError("Network error. Please try again.");
//     }
//   };

//   const formStyle = {
//     maxWidth: "600px",
//     margin: "auto",
//     padding: "20px",
//     borderRadius: "8px",
//     backgroundColor: "#f8f9fa",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     fontSize: "16px",
//   };

//   const buttonStyle = {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "18px",
//     cursor: "pointer",
//   };

//   return (
//     <>
//       <section id="contact" style={{ padding: "40px 0", textAlign: "center" }}>
//         <h2>Contact Us</h2>
//         <p>Feel free to reach out for any inquiries or support. We're here to help!</p>

//         <div style={formStyle}>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name (Optional)"
//               style={inputStyle}
//               onChange={handleChange}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email *"
//               required
//               style={inputStyle}
//               onChange={handleChange}
//             />
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject *"
//               required
//               style={inputStyle}
//               onChange={handleChange}
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message *"
//               required
//               style={{ ...inputStyle, resize: "none" }}
//               onChange={handleChange}
//             ></textarea>

//             {error && <p style={{ color: "red" }}>{error}</p>}
//             {isSubmitted && <p style={{ color: "green" }}>Thank you! Your message has been sent.</p>}

//             <button type="submit" style={buttonStyle}>
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#333", color: "white" }}>
//         <p>&copy; 2024 Nyaay Sahaayak Services</p>
//       </footer>
//     </>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.subject || !formData.message) {
      setError("All fields except Name are required.");
      return;
    }
    setError("");

    try {
      const response = await fetch("http://localhost:5000/submit-contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true); // Show the pop-up
        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 3000);
      } else {
        setError("Failed to submit. Try again later.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  const formStyle = {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    cursor: "pointer",
  };

  return (
    <>
      <section id="contact" style={{ padding: "40px 0", textAlign: "center" }}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out for any inquiries or support. We're here to help!</p>

        <div style={formStyle}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name (Optional)"
              style={inputStyle}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              style={inputStyle}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject *"
              required
              style={inputStyle}
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message *"
              required
              style={{ ...inputStyle, resize: "none" }}
              onChange={handleChange}
            ></textarea>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit" style={buttonStyle}>
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#333", color: "white" }}>
        <p>&copy; 2024 Nyaay Sahaayak Services</p>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <h3 style={{ color: "green" }}>Thank You!</h3>
          <p>Your message has been sent successfully.</p>
        </div>
      )}
    </>
  );
};

export default Contact;
