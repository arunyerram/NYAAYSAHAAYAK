import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Header = () => {

let navigate = useNavigate();

    let loginHandler = () => {
        console.log('login handler');
        navigate('/login')
    }

    let logoutHandler = () => {
        console.log('logout handler');
        sessionStorage.clear();
        navigate('/')
    }
    return ( 
        <div className="row bg-warning d-flex align-items-center">
            <div className="col-sm-3"><Link to='/'><img src="/imgs/logo.png" alt="RealGrande" className="w-25"/></Link></div>
            <div className="col-sm-5"><h2>Your real estate destination</h2></div>
            <div className="col-sm-4">
                {
                (!sessionStorage.getItem('username')) ? 
                <button onClick={loginHandler} className="btn btn-primary mx-3">Login</button>
                :
                <button onClick={logoutHandler} className="btn btn-primary mx-3">Logout</button>
                }
                <Link to='/signup'><button className="btn btn-success">Sign Up</button></Link>
            
                        </div>
        </div>
    );
}

export default Header;


