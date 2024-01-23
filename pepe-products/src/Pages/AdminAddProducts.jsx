import React from 'react'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom';

function AdminAddProducts() {
    const navigate =useNavigate();



  return (
    <>
    <div className='dashboard-screen'>
      <div className='dashboard-wrappeer'>
          <div className='dashboard-adddelete'>
            <div className='dashboard-addproduct'>
              <div className='dashboard-addproduct-llink-add'>
                <div className='dashboard-addproduct-details'>
                  <h2>Mens Products</h2>
                </div>
                <div className='dashboard-addproduct-number'>
                  <span></span>
                </div>
                <div className='dashboard-addproduct-btn'>

                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/add-men-product`)}>
                   <p>Add Men Products</p> 
                  </button>

                </div>
              </div>
            </div>
            <div className='dashboard-deleteproduct'>
              <div className='dashboard-addproduct-llink-add'>
                <div className='dashboard-addproduct-details'>
                  <h2>Womens Products</h2>
                </div>
                <div className='dashboard-addproduct-number'>
                  <span></span>
                </div>
                <div className='dashboard-addproduct-btn'>
                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/add-women-product`)}>
                    Add Women Products
                  </button>
                </div>
              </div>
            </div>
            <div className='dashboard-mobileproduct'>
              <div className='dashboard-addproduct-llink-add'>
                <div className='dashboard-addproduct-details'>
                  <h2>Mobile Products</h2>
                </div>
                <div className='dashboard-addproduct-number'>
                  <span></span>
                </div>
                <div className='dashboard-addproduct-btn'>
                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/add-mobile-product`)}>
                    Add Mobile Products
                  </button>
                </div>
              </div>
            </div>
          </div>
 
      </div>
    </div>
  </>
  )
}

export default AdminAddProducts