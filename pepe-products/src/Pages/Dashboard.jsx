import React from 'react'
import '../css/dashboard.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getData, getMenData, getWomenData } from '../Components/api/api';


function Dashboard() {
  const [apidata, setData] = useState([])
  const [womenData, setWomenData] = useState([])
  const [mobileData, setMobileData] = useState([])
  const navigate = useNavigate();

 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setMobileData(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [])


  useEffect(() => {
   const fetchWomenData =async()=>{
    try{
      const data = await getWomenData();
      setWomenData(data)
    } catch(err){
      console.log(err)
    }
   }
   fetchWomenData();
  }, [])


  useEffect(() => {
    const fetchMenData =async()=>{
      try{
        const data = await getMenData();
        setData(data)
      } catch(err){
        console.log(err)
      }
     }
     fetchMenData();

  }, []);


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