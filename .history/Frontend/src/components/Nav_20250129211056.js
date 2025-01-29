import { Link } from "react-router-dom";
// import 
const MyNav = () => {
    return (
        <>
        <div>
         <header>
            <h1 className="pad">NYAAY SAHAAYAK</h1>
        </header>
            <nav className="navbar navbar-expand-sm navbar" style={{backgroundColor: 'grey'}}>

                <div className="collapse navbar-collapse" id="collapsibleNavId">

                    <ul className="navbar-nav me-auto mt-2 mt-lg-0 ul list">

                    <li className="nav-item col link">
                        <Link className="nav-link col custom-navLink" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                    </li>

                    <li className="nav-item link">
                        <Link className="nav-link col" to="/about">About Us</Link>
                    </li>


                    <li className="nav-item link">
                        <Link className="nav-link col" to="/services">Services</Link>
                    </li>

                    
                    {/* <li className="nav-item link">
                        <Link className="nav-link col" to="/contact">Contact us</Link>
                    </li> */}

                    <li className="nav-item link">
                        <Link className="nav-link col" to="/FAQ">FAQS</Link>
                    </li>
                    
                    <li className="nav-item link">
                        <Link className="nav-link col" to="/ChatBot">LEGAL ASSISTANT</Link>
                    </li>

                     {/* <li className="nav-item link"> 
                    <Link className="nav-link col" to="/Feedback"> FEEDBACK </Link> </li> */}

                            {/* <li className="nav-item link"> */}
 {/* <Link className="nav-link col" to="/Header"> Header </Link> </li> */}
                            
                {sessionStorage.getItem("user")?(
              <>  
              <li classNameName="nav-item link">
              <div classNameName="nav-link active dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"></div>

            </li></>):

              (<li classNameName="nav-item link" >
                <Link classNameName="nav-link col" to="/login">Login</Link>
              </li>

            )}               
            </ul>
                </div>

                <button id="Log"> <Link to="/login"> Logout</Link></button>

            </nav>
        </div>
        </>
      );
}
export default MyNav ;











