import React from 'react'
import '../css/dashboard.css'
import { useState } from 'react'
import MenClothsPage from './MenClothsPage'
import WomenPage from './WomenClothsPage'


function Dashboard() {
  const[selectedSections,setSelectedSections]=useState()

  const handleSectionClick =(e) =>{
setSelectedSections(e)
  };
  
  const handleDashboardClick = () =>{
    setSelectedSections(null);
  };

  const renderDashboardAddDelete = !selectedSections && (
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
                  onClick={()=>handleSectionClick(<MenClothsPage/>)}>
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
                   onClick={()=>handleSectionClick(<WomenPage/>)}>
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
                  <button className='dashboard-buttn'>
                    View Mobile Products
                  </button>
                </div>
              </div>
            </div>
         
          </div>
  );
  
  return (
    <>
      <div className='dashboard-screen'>
        <div className='dashboard-wrappeer'>
        
          {/* <div className='dashboard-adddelete'>
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
                  onClick={()=>handleSectionClick(<MenClothsPage/>)}>
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
                   onClick={()=>handleSectionClick(<WomenPage/>)}>
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
                  <button className='dashboard-buttn'>
                    View Mobile Products
                  </button>
                </div>
              </div>
            </div>
         
          </div> */}
          {renderDashboardAddDelete}
          {selectedSections}
          
         
        </div>
      </div>
    </>
  )
}

export default Dashboard