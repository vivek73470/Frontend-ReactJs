import React from 'react'
import '../../css/adminheader.css'

function AdminHeader() {
  return (
    <>
      <div className='Admin-Header-screen'>
        <div className='Admin-Header-screen-wrapper'>
          <div className='Admin-Header-title'>
            {/* <h1>Admin header</h1> */}
          </div>
          <div className='Admin-Header-profile'>
            <div><h3>Profile</h3>
            </div>
            <div className='Admin-Header-profile-image'>

            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default AdminHeader