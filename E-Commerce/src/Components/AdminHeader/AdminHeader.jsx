import React, { useEffect, useState } from 'react'
import './index.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../Redux/auth/action';

function AdminHeader() {
  const dispatch =useDispatch();
  const userDetails = useSelector((store)=>store.AuthReducer.userData)
   const userId= localStorage.getItem('userId')

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserData(userId));
    }
  }, [dispatch, userId]);

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