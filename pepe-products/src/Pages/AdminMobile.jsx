import React from 'react'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminMobile() {
    const [apiData, setApiData] = useState({});
    const navigate =useNavigate()

    async function getData() {
        try {
            let res = await fetch(`http://localhost:3500/mobiles`);
            let data = await res.json();
            setApiData(data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getData();
    }, [])

  return (
   <>
     <div className='Adminmen-product-screen'>
                <h3>Mobile Covers</h3>
                <div className='Adminmen-product-screen-wrapper'>
                    {apiData.length > 0 && apiData.map((elem, index) => (
                        <div className='admin-men-prdct' key={index}>
                            <img src={elem.productImgTagSrc} alt='' />
                            <p className='admin-product-brandname'>{elem.brand_namez}</p>
                            <p className='admin-product-title-name'>{elem.clr_shade_4}</p>
                            <button onClick={()=>navigate(`/singlemobile/${elem.id}`)}>View details</button>
                        </div>
                    ))}

                </div>

            </div>
   </>
  )
}

export default AdminMobile