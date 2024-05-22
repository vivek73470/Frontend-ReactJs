import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './password.css'
import { Changepassword } from '../../Redux/auth/action'
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom'

function Password() {
    const passId = useSelector((store) => store.AuthReducer.RequestPass)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [passData, setPassData] = useState({ password: '' })



    const handlePass = (e) => {
        setPassData({
            ...passData,
            [e.target.name]: e.target.value

        })

    }

    const handlePassword = (e) => {
        e.preventDefault();
        const { id } = passId;
        passId.password = passData.password
        dispatch(Changepassword(id, passId))
        navigate('/login')

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
                    <form onSubmit={handlePassword}>
                        <label>Enter new password </label>
                        <input
                            name='password'
                            type="password"
                            className='email-forgot'
                            value={passData.password}
                            onChange={handlePass}
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

export default Password