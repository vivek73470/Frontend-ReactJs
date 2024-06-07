import React, { useEffect, useState } from 'react';
import '../SignIn/sign.css';
import LoginImage from '../../Assets/login image.webp';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, provider } from '../../firebase.config'
import { signInWithPopup } from 'firebase/auth'
import Dashboard from '../../Components/Dashboard/Dashboard';


const SignIn = () => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const initState = {
    email: '',
    password: ''
  };

  const [formData, setFormData] = useState(initState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toggleAuth } = React.useContext(AuthContext);

  const navigate = useNavigate()

  const handleClick = () => {
    signInWithGoogle();
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      localStorage.setItem('userId', user.email);
      setIsAuthenticated(true);
      navigate(`/dashboard`); // Navigate to the dashboard after setting isAuthenticated
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function LoginToDashboard() {
    try {
      let isUserFound = false;
      let res = await fetch(`${BASE_URL}/user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      let users = await res.json();
      users.forEach((user) => {
        if (user.email === formData.email && user.password === formData.password) {
          isUserFound = true;
          toggleAuth();
          localStorage.setItem('userId', user.id);
             setIsAuthenticated(true);
          navigate(`/dashboard`);
          toast("Login Successfully!");

        }
      });

    } catch (err) {
      console.log(err);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault(e);

  };


  return (
    <>

      <div className='sign-incard'>
        <div className='sign-incard-left-side'>
          <div>
            <h2 className='signin-welcome-to'>Welcome to the world of Fashion Store!</h2>
          </div>
          <div className='sign-incard-left-side-image'>
            <img src={LoginImage} alt='' />
          </div>
        </div>
        <div className='login-card'>
          <div className='login-card-wrap'>
            <div className='login-card-adminsignin'>
              <div className='login-card-adminsignin-head'>
                <h1 className='welcome'>Admin SignIn !</h1>
              </div>
              <div className='login-card-adminsignup'>
                <p className='content'>Don't have account?</p>
                <Link to='/signup'>
                  <p className='content-signup'>Signup</p>
                </Link>
              </div>

            </div>

            <form className='content-form' onSubmit={handleSubmit}>
              <div className='content-form-input-wid'>
                <input
                  name='email'
                  type='email'
                  placeholder='Email'
                  className='form-content-input'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='content-form-input-wid'>

                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  className='form-content-input'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-button'>
                <button id='btn-frm' onClick={() => LoginToDashboard()}>Submit</button>
              </div>
            </form>
           
            {!isAuthenticated && <button onClick={handleClick}>Sign In with Google</button>}
<Link to='/phone'>
            <span>Login with phone number </span>
</Link>
          </div>
        </div>

      </div>


    </>
  );
};

export default SignIn;
