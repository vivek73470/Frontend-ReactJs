import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import './forgot.css'
import {  RequestchangePassword} from '../../Redux/auth/action'
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'



function Forgot() {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const [emailData, setemailData] = useState({email: ''})



    const handleEmail = (e) => {
        setemailData({
            ...emailData,
            [e.target.name]: e.target.value
        })
    }

    const handleEmailSubmit = async(e) => {
        e.preventDefault();
       const response = await dispatch(RequestchangePassword(emailData))
        if(response.status){
            navigate('/new-password')
        }
        else{
            alert('user not found')
        }
   
    }



  return (
    <>
    <Navbar />
    <div className='register-container'>
        <div className='register-image'>
            <img src={slider} alt="" />
        </div>
        <div className='rigester-medmax-width'>
            <p className='register-acntcrt'>Login in to Topshop</p>
            <p className='register-acntcrt-entr'>Enter Your details below</p>

            <form onSubmit={handleEmailSubmit}>
                        <label>Enter your email to reset your password </label><br />
                        <input
                            name='email'
                            type="email"
                            className='email-forgot'
                            value={emailData.email}
                            onChange={handleEmail}
                        />
                        <br />
                        <input type="submit" />
                    </form>

            <div style={{ textAlign: 'center' }}>
                <Link to='/login'>
                    <span style={{ color: 'gray', textDecoration: 'underline' }}>Back to login</span>
                </Link><br />
               
            </div>
        </div>

    </div>
    <Footer />

  
</>
  )
}

export default Forgot