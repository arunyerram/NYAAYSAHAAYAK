import {Link} from "react-router-dom"

const Service = () => {
    return ( 
        <>
        
    <header>
        <div class="container">
            <h1>Legal Awareness Initiative</h1>
        </div>
    </header>

        
    <section id="services">
        <div class="container">

            {/* <h2>Our Services</h2> */}

            {/* if the user didn't login he should be navigated to signup page and then he should be navigated to login page provide code for navigation */}


            {/* <Link style={{textAlign:"left"}} to="/signup" class="cta-button">Login</Link> */}

            <h2>Our Services</h2>

            
            <div class="service-item">
                <h3>Legal Information</h3>
                <p>Access concise and user-friendly legal information on various topics including family law, property law, labor law, criminal law and other Laws.</p>
            </div>
    
            <div class="service-item">
                <h3>Know-Your-Rights Framework</h3>
                <p>Explore our comprehensive Know-Your-Rights framework, categorizing laws and regulations to educate citizens about their legal rights, entitlements, and remedies.</p>
            </div>
    
            <div class="service-item">
                <h3>Digital Assistant</h3>
                <p>Utilize our user-friendly digital assistant that can provide guidance in multiple languages, addressing common legal queries and providing information on accessing legal aid services.</p>
            </div>

        </div>
    </section>
        
        </>
    );
}


export default Service;



