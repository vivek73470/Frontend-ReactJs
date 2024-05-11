import React, { useEffect, useState } from 'react'
import './index.css'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signIn } from '../../Redux/auth/action';

function AdminHeader() {
  const navigate =useNavigate();
  const dispatch =useDispatch();
  const [name, setName] = useState([]);
  const userDetails = useSelector((store)=>store.AuthReducer.user)
  console.log('headerdet',userDetails)
  const userId = localStorage.getItem('userId');

  useEffect(() => {
dispatch(signIn())
  }, [dispatch])

  return (
    <>
      <div className='Admin-Header-screen'>
        <div className='Admin-Header-screen-wrapper'>
          <div className='Admin-Header-title'>
            <h2>Welcome {userDetails.username}</h2>
          </div>
          <div className='Admin-Header-profile'>
            {/* <div><h3>Profile</h3> */}
            {/* </div> */}
            <div className='Admin-Header-profile-image'>
            {userDetails.profilephoto && (
            < img
              src={userDetails.profilephoto}
              alt='Profile Photo'
            
            />
           
          )}
           
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default AdminHeader