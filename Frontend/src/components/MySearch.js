
import { Link } from "react-router-dom";

const MySearch = () => {
    return ( 
        <div>
            <section class="hero">
            

                <h2>Welcome to Nyaay Sahaayak Platform</h2>

                <p class="pad" text-color="Blue">We're here to help you with your legal needs.</p>

                <div id="search" class = "search body1">

                    <div>
                        <button class="cta-button button1 pad1"><Link to="/chatbot" style={{color:"white"}}>LEGAL ASSISTANT</Link></button>
                    </div>

                </div>

                {/* <ntp-realbox id="realbox" width-behavior_ shown is-dark></ntp-realbox> */}
            
            </section>

        </div>
    );
}

export default MySearch;