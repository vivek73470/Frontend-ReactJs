import React, { useState } from 'react'
import './signup.css'
import { useDispatch } from 'react-redux'
import { signUp } from '../../Redux/auth/action';
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'

function Signup() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(
        { username: '', email: '', password: '' }
    )

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const Submithandler = (e) => {
        e.preventDefault();
        dispatch(signUp(formData))
        setFormData({ username: '', email: '', password: '' })
    }

    return (
        <>
            <div className='register-container'>
                <div className='register-image'>
                    <img src={slider} alt="" />
                </div>
                <div>
                    <p className='register-acntcrt'>Create an account</p>
                    <p className='register-acntcrt-entr'>Enter Your details below</p>

                    <form className='register-frm' onSubmit={Submithandler}>
                        <div> 
                            <input
                                name='username'
                                type="text"
                                id='text'
                                placeholder='Name'
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name='email'
                                type="email"
                                id='text'
                                placeholder='Email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <input
                                name='password'
                                type="password"
                                id='text'
                                placeholder='Password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className='register-btn' type="submit">Create Account</button>
                    </form>
                    
                    <div style={{textAlign:'center'}}>
                    <span className='register-already-actn'>Already have an account?  </span>
                    <Link to='/login'>
                    <span style={{color:'gray',textDecoration:'underline'}}>Log in</span>
                    </Link>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Signup