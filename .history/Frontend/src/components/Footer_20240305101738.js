import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

    
    const Footer = () => {
        return ( 
            <>

    <footer class="site-footer">
    <div class="container">
    <div class="row">
    <div class="col-sm-12 col-md-6">
    <h6 class="text-justify" >About</h6>
    <p class="text-justify">At Legal Assistant Services, we are committed to providing expert legal assistance to meet your needs. Our team of experienced professionals is dedicated to delivering high-quality services and ensuring client satisfaction.

    With a focus on legal consultation, document drafting, contract review, and legal research, we strive to assist individuals and businesses in navigating the complexities of the legal landscape.</p>
    </div>
    <div class="col-6 col-md-3">
    <h6>Categories</h6>
    <ul class="footer-links ">
    <Link to="./KeyFeatures/LawTypes">Lawtypes</Link><br/>
    <Link to="./chatbot">Legal Assistant</Link><br/>
    <Link to="./KnowYourRights" >Know Your Rights</Link><br/>

    </ul>
    </div>
    <div class="col-6 col-md-3">
    <h6>Quick Links</h6>
        <ul class="footer-links">
            <Link to="./about">About Us</Link><br/>
        
            <Link to="./services">Services</Link><br/>
            <Link to="./contact">Contact Us</Link><br/>
            
            <Link to="./FAQ">FAQ'S</Link><br/>
            <Link to="./login">Login</Link><br/>
            

  
    </ul>
    </div>
    </div>
    <hr class="small"></hr>
    </div>
    <div class="container">
    <div class="row">
    <div class="col-md-8 col-sm-6 col-12">
    <p class="copyright-text">Copyright © 2024 All Rights Reserved by
    <a href="/"><span class="logo">NYAAYSAHAAYAK</span></a>
    </p>
    </div>

    

<div className="col-md-4 col-sm-6 col-12">
        <div className="social-links">
            <a
            href="https://www.facebook.com/?stype=lo&deoia=1&jlou=AffHAtNHL3sUUL0bifbeiBsnOdpfKkvc0Lp7omzUGYqnA1xyNtQ8Vhn1VSTEb9eqj_uu9nZnY28qc__EMm1ZUVy2DhDevrohCKt9_c4issybXQ&smuh=6241&lh=Ac_mZJlNgm8HXGecJ0E"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "1.5rem"}}
            >
            <FaFacebookF size={25} style={{ color:"orange"}}/>
            </a>
            <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "1rem"}}
            >
            <FaInstagram size={25} style={{ color: "red" }} />
            </a>
        </div>
        <div className="social-links">
            <a
            href="https://www.linkedin.com/home"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: "1rem" }}
            >
            <FaLinkedinIn size={25} style={{color:"yellow"}}/>
            </a>
            <a
            href="https://twitter.com/?logout=1705815749029"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: "1rem" }}
            >
            <FaTwitter size={25} style={{ color: "Blue"}} />
            </a>
        </div>
        </div>

    </div>
    </div>
    </footer>
            </>

        );
    }
    
    export default Footer;