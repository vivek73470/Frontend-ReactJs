import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './login.css'
import { signIn } from '../../Redux/auth/action';
import { useNavigate } from 'react-router-dom';
import slider from '../../Assets/Slide.png'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/footer'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[formData, setFormData]=useState({ email: '', password: '' })


    const handleChange =(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const Submithandler = async (e) => {
        e.preventDefault();
        dispatch(signIn(formData));
            const response = await dispatch(signIn(formData));
            if (response.status ) {
                setFormData({ email: '', password: '' });
                navigate('/products');
            }
            if(!response.status){
                alert("wrong password OR email")
            }   
    };

  return (
//    <>
// <div>
  
//     <form className='register-frm' onSubmit={Submithandler}>
//         <div>
//             <input 
//             name='email'
//             type="email"
//             id='text'
//             placeholder='enter email'
//             value={formData.email}
//             onChange={handleChange}
//              />
//         </div>
//         <div>
//             <input 
//             name='password'
//             type="password"
//             id='text'
//             placeholder='password'
//             value={formData.password}
//             onChange={handleChange}
//              />
//         </div>
//         <button className='register-btn' type="submit">Log IN</button>
//     </form>
// </div>
//    </>

<>
<div className='register-container'>
    <div className='register-image'>
        <img src={slider} alt="" />
    </div>
    <div>
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
        <div>
            <input 
            name='password'
            type="password"
            id='text'
            placeholder='password'
            value={formData.password}
            onChange={handleChange}
             />
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