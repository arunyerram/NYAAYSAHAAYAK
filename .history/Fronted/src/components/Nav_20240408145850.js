import { Link } from "react-router-dom";
// import 
const MyNav = () => {
    return (
        <>
        <div>
         <header>
            <h1 class="pad">NYAAY SAHAAYAK</h1>
        </header>
            <nav class="navbar navbar-expand-sm navbar" style={{backgroundColor: 'grey'}}>

                <div class="collapse navbar-collapse" id="collapsibleNavId">

                    <ul class="navbar-nav me-auto mt-2 mt-lg-0 ul list">

                    <li class="nav-item col link">
                        <Link class="nav-link col custom-navLink" to="/" aria-current="page">Home <span class="visually-hidden">(current)</span></Link>
                    </li>

                    <li class="nav-item link">
                        <Link class="nav-link col" to="/about">About Us</Link>
                    </li>


                    <li class="nav-item link">
                        <Link class="nav-link col" to="/services">Services</Link>
                    </li>

                    
                    <li class="nav-item link">
                        <Link class="nav-link col" to="/contact">Contact us</Link>
                    </li>

                    <li class="nav-item link">
                        <Link class="nav-link col" to="/FAQ">FAQS</Link>
                    </li>
                    
                    <li class="nav-item link">
                        <Link class="nav-link col" to="/ChatBot">LEGAL ASSISTANT</Link>
                    </li>

                     {/* <li class="nav-item link"> 
                    <Link class="nav-link col" to="/Feedback"> FEEDBACK </Link> </li> */}

                            {/* <li class="nav-item link"> */}
 {/* <Link class="nav-link col" to="/Header"> Header </Link> </li> */}
                            
                {sessionStorage.getItem("user")?(
              <>  
              <li className="nav-item link">
              <div className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></div>

            </li></>):

              (<li className="nav-item link" >
                <Link className="nav-link col" to="/login">Login</Link>
              </li>

            )}               
            </ul>
                </div>

                <button id="Log"> <Link to="/"> Logout</Link></button>

            </nav>
        </div>
        </>
      );
}
export default MyNav ;











