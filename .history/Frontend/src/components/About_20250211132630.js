import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return ( 
        <>
           <header>
    <div className="container">
        <h1>Legal Awareness Initiative</h1>
    </div>
</header>

<section id="about-us">
    <div className="container">
        <article className="about">
            <h2>About Us</h2>
            <p >Welcome to our platform dedicated to providing legal information and guidance to all citizens, with a focus on accessibility and user-friendliness.</p>

            <p>Our mission is to empower individuals, especially those from marginalized communities, by offering a comprehensive Know-Your-Rights framework and a user-friendly digital assistant.</p>

            <p>We believe in simplifying legal complexities, making legal information easily understandable, and fostering a better-informed society.</p>

            <p>Through collaboration with legal aid providers, our platform aims to continuously update and reflect changes in the legal landscape, ensuring accurate and up-to-date information.</p>
        </article>
    </div>
</section> 
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

        </>

     );
}
 
export default About;


