import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from "react-router-dom";
function FAQ() {
  const navigate = useNavigate();
  return (
    <>
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>What are my rights as a citizen?</Accordion.Header>
        <Accordion.Body>
     
       As a citizen, you have fundamental rights such as freedom of speech, right to equality, and right to life. These are protected by the constitution.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>How can I file a complaint?</Accordion.Header>
        <Accordion.Body>
        To file a complaint, you can visit your local police station or file an online complaint with relevant authorities. Make sure to provide necessary details and evidence.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>How can I access legal aid services?</Accordion.Header>
        <Accordion.Body>
        Legal aid services can be accessed through legal aid organizations. Contact them directly, and they can provide assistance based on your needs.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header> How can I obtain legal documents?</Accordion.Header>
        <Accordion.Body>
        Legal documents can be obtained through government offices, legal professionals, or online platforms. Ensure you follow the proper procedures for document retrieval.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>What are the legal implications of a particular action?</Accordion.Header>
        <Accordion.Body>
        The legal implications of an action depend on the specific context. Consult with legal professionals or use our digital assistant for guidance on your particular situation.
        </Accordion.Body>

        <Accordion.Item eventKey="5">
        <Accordion.Header>Is legal aid free of charge?</Accordion.Header>
        <Accordion.Body>
        Yes, legal aid services are often provided free of charge to individuals who meet certain income and eligibility criteria. Contact legal aid organizations for more details.
        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="6">
        <Accordion.Header>Can I get legal advice online?</Accordion.Header>
        <Accordion.Body>
        Yes, our digital assistant can provide online legal advice. However, for complex matters, it's advisable to consult with a licensed legal professional.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="7">
        <Accordion.Header>How often is the Know-Your-Rights framework updated?</Accordion.Header>
        <Accordion.Body>
        The Know-Your-Rights framework is regularly updated to reflect changes in laws and regulations. We aim to provide the most current and accurate information.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="8">
        <Accordion.Header>Are my interactions with the digital assistant confidential?</Accordion.Header>
        <Accordion.Body>
        Yes, we prioritize user privacy. Interactions with our digital assistant are confidential, and we do not store personal data without explicit consent.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion.Item>

      <Accordion.Item eventKey="9">
        <Accordion.Header>How can I contribute to the legal awareness initiative?</Accordion.Header>
        <Accordion.Body>
        You can contribute by spreading awareness, sharing our resources, and providing feedback. Contact us to explore potential collaboration or volunteer opportunities.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="10">
        <Accordion.Header> Can I request additional topics for legal information?</Accordion.Header>
        <Accordion.Body>
        Absolutely! We welcome user suggestions. If you have specific legal topics you'd like information on, please contact us, and we'll do our best to provide relevant content.
        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="11">
        <Accordion.Header>Is the website accessible for users with disabilities?</Accordion.Header>
        <Accordion.Body>
        Yes, we are committed to accessibility. Our website includes features such as alt text for images and proper heading structure to ensure a positive experience for users with disabilities.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="12">
        <Accordion.Header>How can I stay updated on legal news?</Accordion.Header>
        <Accordion.Body>
        You can stay updated by checking our website's legal news section. Additionally, follow us on social media for real-time updates and relevant legal news.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="13">
        <Accordion.Header>Can I share legal information from this website?</Accordion.Header>
        <Accordion.Body>
        Yes, feel free to share legal information from our website. We encourage spreading awareness. Ensure that you provide proper attribution and link back to the source.
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>

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

export default FAQ;

