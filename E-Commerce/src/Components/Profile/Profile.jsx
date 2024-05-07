import React, { useRef, useState } from 'react'
import './profile.css';
import { CgProfile } from "react-icons/cg";

function Profile() {
  const [open, setOpen] = useState(false);
  const Menus = ["Profile", "Logout"];

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
          
        <span
  className='profile-pht'
  ref={imgRef}
  onClick={(e) => {
    e.stopPropagation(); // Stop event propagation
    setOpen(!open);
  }}
>
  <CgProfile />
</span>

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