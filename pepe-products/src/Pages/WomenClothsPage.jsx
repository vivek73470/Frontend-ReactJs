import React from 'react'
import '../css/productpage.css'
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/footer';

function WomenPage() {
    
    const [apidata, setData] = useState([])
    const navigate = useNavigate()

    async function getData() {
        try {
            let res = await fetch(`http://localhost:3500/womensdata/`);
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
        getData();
       
    }, [])

    // async function deleteProduct(id) {
    //     let res = await fetch(`http://localhost:3500/product/${id}`, {
    //         method: 'DELETE',

    //         headers: {
    //             'Content-Type': 'application/json',
    //         }
    //     });

    //     let data = await res.json();
    //     console.log(data)
    //     getData()

    // }

    return (
        <>
      
            <div className='product-page-mainscreen'>
                <div className='product-page-sidebar'>
                    <h1>Womens Clothing</h1>
                </div>
                <div className='product-page-content'>
                    {apidata.length > 0 && apidata.map((e, i) =>
                        <div className='prdct-size' key={e.id}
                            onClick={() => navigate(`/singlewomen/${e.id}`)}
                        >
                            <img src={e.productImgTagSrc} alt={i} />
                            <p className='product-brandname'>{e.brand_namez}</p>
                            <p className='product-title-name'>{e.clr_shade_4}</p>
                            <div className='product-price-description'>
                                <p className='product-discount-price'>₹{e.discountedPriceText}</p>
                                <p className='product-actual-price'>₹{e.actualPriceText}</p>
                            </div>
                            <p className='product-title-members'>₹{e.discount_price_box} For Tribe Members</p>
                            {/* <div style={{ display: "flex" }}>
                                <button onClick={() => { deleteProduct(e.id) }}>delete</button>
                            </div> */}

                        </div>
                    )}
                </div>
            </div>

            <Footer/>

        </>
    )
}

export default WomenPage