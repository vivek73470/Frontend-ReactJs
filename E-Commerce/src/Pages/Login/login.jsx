import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './login.css'
import { signIn } from '../../Redux/auth/action';
import { useNavigate } from 'react-router-dom';
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'
import Navbar from '../../Components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEyeSlash } from "react-icons/fa6";


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[formData, setFormData]=useState({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false);


    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const eyeToggle =()=>{
        setShowPassword(!showPassword);
    }
    const Submithandler = async (e) => {
        e.preventDefault();
        dispatch(signIn(formData));
            const response = await dispatch(signIn(formData));
            if (response.status ) {
                setFormData({ email: '', password: '' });
                navigate('/admin');
                 toast("Login Successfully!");
            }
            if(!response.status){
                alert("wrong password OR email")
            }   
    };

  return (

<>
<Navbar/>
<div className='register-container'>
    <div className='register-image'>
        <img src={slider} alt="" />
    </div>
    <div className='rigester-medmax-width'>
        <p className='register-acntcrt'>Login in to Topshop</p>
        <p className='register-acntcrt-entr'>Enter Your details below</p>

        <form className='register-frm' onSubmit={Submithandler}>
        <div>
            <input 
            name='email'
            type="email"
            id='text'
            placeholder='enter email'
            value={formData.email}
            onChange={handleChange}
             />
        </div>
        <div className='hide-show-funct'>
            <input 
            name='password'
            type={showPassword ? 'text' : 'password'}
            id='text'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
             />
             <span onClick={()=>eyeToggle()}><FaEyeSlash />
           
             </span>
        </div>
        <button className='register-btn' type="submit">Log IN</button>
    </form>
        
        <div style={{textAlign:'center'}}>
        <span className='register-already-actn'>Don't have an account?  </span>
        <Link to='/signup'>
        <span style={{color:'gray',textDecoration:'underline'}}>Register</span>
        </Link>
        </div>
    </div>

</div>
<Footer/>
</>
  )
}

export default Login