import React from 'react'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <div className='dashboard-screen'>
        <div className='dashboard-wrappeer'>
            <div className='dashboard-adddelete'>
              <div className='dashboard-addproduct'>
                <div className='dashboard-addproduct-llink'>
                  <div className='dashboard-addproduct-details'>
                    <h2>Mens Products</h2>
                  </div>
                  <div className='dashboard-addproduct-number'>
                    <span></span>
                  </div>
                  <div className='dashboard-addproduct-btn'>

                    <button className='dashboard-buttn'
                      onClick={() => navigate('menproducts')}>
                      View Men Products
                    </button>

                  </div>
                </div>
              </div>
              <div className='dashboard-deleteproduct'>
                <div className='dashboard-delproduct-llink'>
                  <div className='dashboard-addproduct-details'>
                    <h2>Womens Products</h2>
                  </div>
                  <div className='dashboard-addproduct-number'>
                    <span></span>
                  </div>
                  <div className='dashboard-addproduct-btn'>
                    <button className='dashboard-buttn'
                      onClick={() => navigate('women-products')}>
                      View Women Products
                    </button>
                  </div>
                </div>
              </div>
              <div className='dashboard-mobileproduct'>
                <div className='dashboard-mobproduct-llink'>
                  <div className='dashboard-addproduct-details'>
                    <h2>Mobile Products</h2>
                  </div>
                  <div className='dashboard-addproduct-number'>
                    <span></span>
                  </div>
                  <div className='dashboard-addproduct-btn'>
                    <button className='dashboard-buttn'
                      onClick={() => navigate('mobiles-cover')}>
                      View Mobile Products
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

export default Dashboard