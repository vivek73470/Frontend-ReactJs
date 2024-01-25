import React from 'react'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom';

function AdminAddProducts() {
    const navigate =useNavigate();



  return (
    <>
    <div className='dashboard-screen'>
      <div className='dashboard-wrappeer'>
      <h3 className='add-prdt-top'>Add your products</h3>
          <div className='dashboard-adddelete'>
            <div className='dashboard-addproductt'>
              <div className='dashboard-addproduct-llink-add'>
                <div className='dashboard-addproduct-details'>
                  <h2 className='add-animation'>Mens Products</h2>
                </div>
                <div className='dashboard-addproduct-number-dd'>
                  <span></span>
                </div>
                <div className='dashboard-addproduct-btns'>

                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/add-men-product`)}>
                   <p>Add Men Products</p> 
                  </button>

                </div>
              </div>
            </div>
            <div className='dashboard-deleteproductt'>
              <div className='dashboard-addproduct-llink-add'>
                <div className='dashboard-addproduct-details'>
                  <h2 >Womens Products</h2>
                </div>
                <div className='dashboard-addproduct-number-dd'>
                  <span></span>
                </div>
                <div className='dashboard-addproduct-btns'>
                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/add-women-product`)}>
                    Add Women Products
                  </button>
                </div>
              </div>
            </div>
            <div className='dashboard-mobileproductt'>
              <div className='dashboard-addproduct-llink-add'>
                <div className='dashboard-addproduct-details'>
                  <h2>Mobile Products</h2>
                </div>
                <div className='dashboard-addproduct-number-dd'>
                  <span></span>
                </div>
                <div className='dashboard-addproduct-btns'>
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