import React from 'react'
import '../../css/singlepage.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/footer';
import Navbar from '../../Components/Header/Header';


function SingleMobile() {

    const [mobileData, setMobileData] = useState({});
    let { id } = useParams();


    async function getData() {
        try {
            let res = await fetch(`http://localhost:3000/mobiles/${id}`)
            console.log('try', res)
            let data = await res.json();
            setMobileData(data)

        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    },[])

    return (
        <>
        <Navbar/>
            <div className='single-product-mainscreen'>
                <div className='single-product-wrapscreen'>
                    <div className='single-mobile-sidebar'>
                        <div className='prdct-size-mobile' key={mobileData.id}>
                            <img src={mobileData.productImgTagSrc} alt='' />
                        </div>
                    
                    </div>

                    <div className='single-product-details'>
                        <p className='single-product-fashion'>Fashion Store</p>
                        <p className='single-product-men'>Gambling Problem Printed Premium Glass Cover For OnePlus 9RT (Impact Resistant, Matte Finish)</p>
                        <div className='single-product-actdiscount'>
                            <p className='single-product-discount'>रु.{mobileData.discountedPriceText}</p>
                            <p className='single-product-actual'>{mobileData.actualPriceText}रु.</p>
                            <div className='single-product-off'>
                                <p>65</p>
                                <p> %OFF</p>
                            </div>
                        </div>
                        <div className='single-page-inclusive'>
                            <p>
                                inclusive of all taxes
                            </p>
                        </div>
                        <div className='single-page-details'>
                            <div className='single-product-1st'>
                                <p>DESIGN OF THE DAY</p>
                            </div>
                            <div className='single-product-2nd'>
                                <p>DESIGN OF THE DAY</p>

                            </div>
                        </div>
                        <div>
                            <p className='single-page-border'></p>
                            <p className='single-page-tribe'>TriBe members get an extra discount of ₹40 and FREE shipping.</p>
                            <p className='single-page-border'></p>
                        </div>
                        <div>
                            <p className='single-product-select'> Select Size</p>
                        </div>
                        <div className='single-product-sizeflex'>
                        </div>
                        <div>
                            <p className='single-product-garment'>Garment:Chest (in Inch):38.0 | Front Length (in Inch):27.25 | Sleeve Length (in Inch):8.0</p>
                        </div>
                        <div className='single-product-detail-box'>
                            <p className='single-product-datail-head' >Product Details</p>
                            <div>
                                <p className='single-product-brand'>Brand:Silicone/Rubber</p>
                                <p className='single-product-brand'>Product Name: Provides a sleek and rugged appearance, offering enhanced durability.</p>
                                <p className='single-product-brand'>Product Type: Full Silicone Glass</p>
                            </div>

                        </div>
                        <div className='single-product-description'>
                            <p className='single-product-datail-head'>Description</p>
                            <p>When choosing a mobile cover, it's essential to consider your specific needs, such as the level of protection required, preferred design, and any additional features you may find useful. Additionally, ensure that the cover is compatible with your specific mobile phone model.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SingleMobile