import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './login.css'
import { Changepassword, RequestchangePassword, signIn } from '../../Redux/auth/action'
import { useNavigate } from 'react-router-dom';
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from "react-icons/fa6";


function Login() {
    const passId = useSelector((store)=>store.AuthReducer.RequestPass)

    console.log('passId',passId)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [emailData, setemailData] = useState({email: ''})
    const [passData, setPassData] = useState({password: ''})
    const [showPassword, setShowPassword] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleEmail = (e) => {
        setemailData({
            ...emailData,
            [e.target.name]: e.target.value
        })
    }
    const handlePass = (e) => {
        setPassData({
            ...passData,
            [e.target.name]: e.target.value

        })

    }

    const eyeToggle = () => {
        setShowPassword(!showPassword);
    }

    const Submithandler = async (e) => {
        e.preventDefault();
        dispatch(signIn(formData));
        const response = await dispatch(signIn(formData));
        if (response.status) {
            setFormData({ email: '', password: '' });
            navigate('/admin');
            toast("Login Successfully!");
        }
        if (!response.status) {
            alert("wrong password OR email")
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        dispatch(RequestchangePassword(emailData))
    }

    const handlePassword = (e) => {
        e.preventDefault();
        const { id } = passId;
        dispatch(Changepassword(id,passData))

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

                    <form className='register-frm' onSubmit={Submithandler}>
                        <div className='hide-show-funct'>
                            <input
                                name='email'
                                type="email"
                                id='text-pas'
                                placeholder='enter email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='hide-show-funct'>
                            <input
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                id='text-pas'
                                placeholder='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <span className='design-eyetoggle' onClick={() => eyeToggle()}><FaEyeSlash />

                            </span>
                        </div>
                        <button className='register-btn' type="submit">Log IN</button>
                    </form>

                    <div style={{ textAlign: 'center' }}>
                        <span className='register-already-actn'>Don't have an account?  </span>
                        <Link to='/signup'>
                            <span style={{ color: 'gray', textDecoration: 'underline' }}>Register</span>
                        </Link><br />
                        <span className='forget-pass' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Forgot password ?</span>
                    </div>
                </div>

            </div>
            <Footer />

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Forgot Password</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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
                                <input data-bs-toggle="modal" data-bs-target="#taticBackdrop" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="taticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Forgot Password</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form onSubmit={handlePassword}>
                                <label>Enter your password </label>
                                <input
                                    name='password'
                                    type="password"
                                    className='email-forgot'
                                    value={passData.password}
                                    onChange={handlePass}
                                />
                                <br />
                                <input type="submit" data-bs-toggle="modal" data-bs-target="#taticBackdrop" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login