import React from 'react'
import '../css/productpage.css'
import { useState,useEffect } from 'react';
import Footer from '../Components/Footer/footer';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Header/Header';
import { getData } from '../Components/api/api';



function MobileCover() {
    const [apidata, setData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
              const data = await getData();
              setData(data);
            } catch (err) {
              console.log(err);
            }
          };
      
          fetchData();
      
    }, [])

  return (
         <>
         <Navbar/>
            <div className='product-page-mainscreen'>
                <div className='product-page-sidebar'>
                    <h1>Mobile Covers</h1>
                    <div className='count-total-prd'>
                    <p>Total Products:</p> <h5> {apidata.length}</h5>
                    </div>
                </div>
                <div className='product-page-content'>
                    {apidata.length > 0 && apidata.map((e, i) =>
                        <div className='prdct-size' key={e.id}
                        onClick={()=>navigate(`/singlemobile/${e.id}`)} >
                            <img src={e.productImgTagSrc} alt={i} />
                            <p className='product-brandname'>{e.brand_namez}</p>
                            <p className='product-title-name'>{e.clr_shade_4}</p>
                            <div className='product-price-description'>
                                <p className='product-discount-price'>₹{e.discountedPriceText}</p>
                                <p className='product-actual-price'>₹{e.actualPriceText}</p>
                            </div>
                            <p className='product-title-members'>₹{e.discount_price_box} For Tribe Members</p>

                        </div>
                    )}
                </div>
            </div>
            <Footer/>

        </>
  )
}

export default MobileCover
