import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) {
      setError("Both fields are required.");
      return;
    }
    setError("");

    try {
      const response = await fetch("http://localhost:5000/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 2000);
      } else {
        setError("Failed to submit. Try again later.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div style={{
      width: "400px", margin: "auto", marginTop:"",padding: "20px", border: "1px solid #ccc",
      borderRadius: "10px", textAlign: "center", boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your Email *"
          required
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", border: "1px solid #ccc" }}
        />
        <textarea
          name="message"
          placeholder="Your Feedback *"
          required
          value={formData.message}
          onChange={handleChange}
          style={{ width: "100%", padding: "10px", height: "100px", border: "1px solid #ccc" }}
        ></textarea>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {isSubmitted && <p style={{ color: "green" }}>Feedback submitted successfully!</p>}

        <button type="submit" style={{
          width: "100%", padding: "10px", backgroundColor: "#28a745", color: "white",
          border: "none", borderRadius: "5px", cursor: "pointer"
        }}>Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
