import React from 'react'
import '../css/dashboard.css'
import { useState } from 'react'
import AdminMenProducts from './AdminMenProducts'
import AdminWomenProduct from './AdminWomenProduct'
import AdminMobile from './AdminMobile'


function Dashboard() {
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
                <div className='dashboard-addproduct-llink'>
                  <div className='dashboard-addproduct-details'>
                    <h2>Mens Products</h2>
                  </div>
                  <div className='dashboard-addproduct-number'>
                    <span></span>
                  </div>
                  <div className='dashboard-addproduct-btn'>

                    <button className='dashboard-buttn'
                      onClick={() => handleSectionClick(<AdminMenProducts />)}>
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
                      onClick={() => handleSectionClick(<AdminWomenProduct />)}>
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
                      onClick={() => handleSectionClick(<AdminMobile/>)}>
                      View Mobile Products
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

export default Dashboard