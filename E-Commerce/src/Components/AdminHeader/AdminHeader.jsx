import React, { useEffect, useState } from 'react'
import './index.css'
import { Navigate, useNavigate } from 'react-router-dom';

function AdminHeader() {
  const navigate =useNavigate();
  const [name, setName] = useState([]);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/user/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        let user = await res.json();
        console.log('u', user)

        setName(user);
        console.log('User after setting data:', user);

      }
      catch (error) {
        console.log(error)
      }
    };
    fetchProfileData();
  }, [])

  return (
    <>
      <div className='Admin-Header-screen'>
        <div className='Admin-Header-screen-wrapper'>
          <div className='Admin-Header-title'>
            <h2>Welcome {name.username}</h2>
          </div>
          <div className='Admin-Header-profile'>
            {/* <div><h3>Profile</h3> */}
            {/* </div> */}
            <div className='Admin-Header-profile-image'>
            {name.profilephoto && (
            < img
              src={name.profilephoto}
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