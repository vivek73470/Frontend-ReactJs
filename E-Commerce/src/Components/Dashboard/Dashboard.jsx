import React from 'react'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Dashboard() {
  const [apidata, setData] = useState([])
  const [womenData, setWomenData] = useState([])
  const [mobileData, setMobileData] = useState([])
  const navigate = useNavigate();




  return (
    <>
      <div className='dashboard-screen'>
        <div className='dashboard-wrappeer'>
          <div className='dashboard-adddelete'>
            <div className='dashboard-addproduct'>
              <div className='dashboard-addproduct-llink'>
                <div className='dashboard-addproduct-details'>
                  <h2>Total Mens Products</h2>
                </div>
                <div className='dashboard-addproduct-number-men'>
                  <span className='dashbrd-total-men'><h3> {apidata.length}</h3></span>
                </div>
                <div className='dashboard-addproduct-btn-men'>
                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/`)}>
                    View Men Products
                  </button>
                </div>
              </div>
            </div>
            <div className='dashboard-deleteproduct'>
              <div className='dashboard-delproduct-llink'>
                <div className='dashboard-addproduct-details'>
                  <h2>Total Womens Products</h2>
                </div>
                <div className='dashboard-addproduct-number'>
                  <span><h3>{womenData.length}</h3></span>
                </div>
                <div className='dashboard-addproduct-btn'>
                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/`)}>
                    View Women Products
                  </button>
                </div>
              </div>
            </div>
            <div className='dashboard-mobileproduct'>
              <div className='dashboard-mobproduct-llink'>
                <div className='dashboard-addproduct-details'>
                  <h2>Total Mobile Products</h2>
                </div>
                <div className='dashboard-addproduct-number'>
                  <span><h3>{mobileData.length}</h3></span>
                </div>
                <div className='dashboard-addproduct-btn'>
                  <button className='dashboard-buttn'
                    onClick={() => navigate(`/`)}>
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