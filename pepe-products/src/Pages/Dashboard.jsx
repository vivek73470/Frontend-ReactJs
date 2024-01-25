import React from 'react'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Dashboard() {
  const [apidata, setData] = useState([])
  const [womenData, setWomenData] = useState([])
  const [mobileData, setMobileData] = useState([])
  const navigate = useNavigate();

  async function getMobileData() {
    try {
      let res = await fetch(`http://localhost:3500/mobiles/`);
      let data = await res.json();
      setMobileData(data)
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMobileData();
  }, [])

  async function getMenData() {
    try {
      let res = await fetch(`http://localhost:3500/mensdata/`);
      let data = await res.json();
      console.log(data);

      setData(data)
      console.log(apidata)
    }

    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getMenData();
  }, []);


  async function getWomenData() {
    try {
      let res = await fetch(`http://localhost:3500/womensdata/`);
      let data = await res.json();
      console.log(data);
      setWomenData(data)
      console.log(apidata)
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getWomenData();
  }, [])

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
                    onClick={() => navigate(`/menproducts`)}>
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
                    onClick={() => navigate(`/women-products`)}>
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
                    onClick={() => navigate(`/mobiles-cover`)}>
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