import React from 'react'
import { useState } from 'react'
import '../SignUp/index.css'
import { useNavigate } from 'react-router-dom';
import Imagesignup from '../../Assets/login image.webp'
import { Link } from 'react-router-dom';

const initState = {
  username: '',
  email: '',
  password: ''

};

function Signup() {
  const [formData, setFormData] = useState(initState);
  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData((prevformData) => ({
      ...prevformData,
      [e.target.name]: e.target.value

    }));


  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Save form data to localStorage
    // let users = JSON.parse(localStorage.getItem('users')) || [];
    // users.push(formData);
    // localStorage.setItem('users', JSON.stringify(users));

    // Clear form fields after submission
    // setFormData(initState);
    // navigate("/");

    try{
      let res = await fetch(`http://localhost:3000/user`,{
        method:'POST',

        body:JSON.stringify(formData),

        headers:{
          'Content-Type': 'application/json',
        }
      })

      let data = await res.json();
      console.log(data)
      setFormData(initState)
      navigate('/')

    }
    catch(err){
      console.log(err);
    }

  };


  return (
    <>
      <div className='signup-screen'>
        <div className='signup-left-side'>
          <div>
            <h2 className='signup-welcome-to'>Welcome to the world of Fashion Store!</h2>
          </div>
          <div className='signup-incard-left-side-image'>
            <img src={Imagesignup} alt='' />
          </div>
        </div>

        <div className='signup-card'>
          <div className='signup-wraper'>
            <div className='signup-card-adminsignin'>
              <div className='login-card-adminsignin-head'>
                <h1 className='welcome'>Sign Up</h1>
              </div>
              <div className='signup-card-adminsignup'>
                <p className='content'> have an account?</p>
                <Link to='/signin'>
                  <p className='content-signup'>SignIn</p>
                </Link>
              </div>
            </div>

            <div>
              <form className='content-form' onSubmit={handleSubmit}>
                <input
                  name='username'
                  type='text'
                  className='form-content-input-signup'
                  id='form-content-name-signup'
                  placeholder='Name'
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  name='email'
                  type='email'
                  className='form-content-input-signup'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <br />
                <input
                  name='password'
                  type='password'
                  className='form-content-input-signup'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <br />
                <div className='form-button-signup'>
                  <button id='btn-frm-signup'>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup