import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const Signup = () => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState({ email: '', password: '', name: '' });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/signup', data);

      if (res.data.success) {
        sessionStorage.setItem("userId", res.data.userId);
        setIsError(false);
        navigate('/'); 
      } else {
        setIsError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Already Have An Account?</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>

        <div className={styles.right}>
          {isError ? <p>Invalid input</p> : null}
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Sign Up for an Account</h1>
            <input
              type="text" 
              placeholder="Enter your Name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            <button type="submit" className={styles.green_btn}><Link to="/">  </Link>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;