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
            <span>Welcome {userDetails.username}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminHeader