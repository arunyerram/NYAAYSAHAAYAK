import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styles from './styles.module.css';

const Login = () => {
  const [pole,setpole] = useState(true);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const [data1, setData] = useState({name:'', email: '', password: '' });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data1, [input.name]: input.value });

    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://nyaaysahaayakbackend-1.onrender.com/login', data1)
      .then((res) => {
        console.log(res.data);
        // Check the response from the server and navigate accordingly
        if (res.data.success) {
          sessionStorage.setItem("user",res.data);
          setIsError(false);
          navigate('/');
        } else {
          setIsError(true);
          setpole(false)
        }
      })
      .catch((err) => {
        console.log(err);
        setpole(false)
      });
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="name"
              placeholder="Enter your Name"
              name="name"
              onChange={handleChange}
              value={data1.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data1.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data1.password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
            {pole ? null : <p style={{color:"red"}} >Invalid input</p>}
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;