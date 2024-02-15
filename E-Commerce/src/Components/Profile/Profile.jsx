import React, { useRef, useState } from 'react'
import './profile.css';
import profile from '../../Assets/Screenshot (140).png';

function Profile() {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Login", "Logout"];

  const menuRef = useRef();
  const imgRef = useRef();

  window.addEventListener("click",(e) =>{
    if(e.target !== menuRef.current && e.target !== imgRef.current){
      setOpen(false);
    }
  });
  return (
    <>
      <div className='profile-screen'>
        <div className='prfl-pic'>
          <img
          ref={imgRef}
          onClick={()=> setOpen(!open)}
           className='profile-pht'
            src={profile} 
            alt="user" />

          {
            open && (
              <div
              ref={menuRef}
               className='profile-menu-options'>
                <ul>
                  {
                    Menus.map((menu) => (
                      <li 
                      onClick={()=>setOpen(false)}
                      className='list-mne'
                       key={menu}>{menu}</li>
                    ))
                  }
                </ul>
              </div>
            )
          }

        </div>

      </div>
    </>
  )
}

export default Profile