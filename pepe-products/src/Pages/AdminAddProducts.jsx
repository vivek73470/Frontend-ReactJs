import React from 'react'
import '../css/dashboard.css'
import { useState } from 'react';
import Addproduct from './AddMenproduct';
import AddWomenproduct from './AddWomenproduct';
import AddMobileproduct from './AddMobileproduct';

function AdminAddProducts() {
    const [selectedSections, setSelectedSections] = useState(null)

    const handleSectionClick = (e) => {
      setSelectedSections(e)
    };

  return (
    <>
    <div className='dashboard-screen'>
      <div className='dashboard-wrappeer'>

        {selectedSections ? (
          <div>{selectedSections}</div>
        ) : (
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
                    onClick={() => handleSectionClick(<Addproduct />)}>
                    Add Men Products
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
                    onClick={() => handleSectionClick(<AddWomenproduct />)}>
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
                    onClick={() => handleSectionClick(<AddMobileproduct/>)}>
                    Add Mobile Products
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  )
}

export default AdminAddProducts