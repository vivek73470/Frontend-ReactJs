import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer/footer';

function SingleWomenPage() {
    // apidata and selectedImage are state variables managed using the useState hook

    // apidata: Stores data retrieved from an API call.
    // selectedImage: Keeps track of the currently selected image.
    const{id}=useParams();

    const [apidata, setApiData] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
   


    async function singledata() {
        try {
            let res = await fetch(`http://localhost:3500/womensdata/${id}`);
    
            let data = await res.json();
            console.log('fetched data', data);
            setApiData(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        singledata();
    }, []);

    // hook monitors changes in the apidata state. When apidata changes, 
    // it updates the selectedImage state with the first image's URL from the fetched product data.
    useEffect(() => {
        if (apidata) {
            console.log("dta", apidata)
            setSelectedImage(apidata.productImgTagSrc);
        }
    }, [apidata]);

    const handleImageClick = (e) => {
        setSelectedImage(e);
    };

    return (
        <>
        <div className='single-product-mainscreen'>
            <div className='single-product-wrapscreen'>
                <div className='single-product-sidebar'>
                    <div className='single-product-insidebar' >
                        {apidata && apidata.multi_image?.map((image, i) => (
                            <img
                                key={{ i }} // Using a unique key for each image
                                src={image}
                                alt={`Image ${i + 1}`}
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>
                <div className='single-product-other-single'>
                    <img src={selectedImage} alt='Selected' />
                </div>
                <div className='single-product-details'>
                    <p className='single-product-fashion'>Fashion Store</p>
                    <p className='single-product-men'>Men's White The Ryuk Graphic Printed T-shirt</p>
                    {apidata && (
                        <div className='single-product-actdiscount'>
                            <p className='single-product-discount'>रु.{apidata.discount_price_box}</p>
                            <p className='single-product-actual'>{apidata.actualPriceText}रु.</p>
                            <div className='single-product-off'>
                                <p>65</p>
                                <p> %OFF</p>
                            </div>
                        </div>
                    )}
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
                        {apidata.size?.map((e) =>
                            <p className='single-page-size-btnn'>{e}</p>
                        )}
                    </div>
                    <div>
                        <p className='single-product-garment'>Garment:Chest (in Inch):38.0 | Front Length (in Inch):27.25 | Sleeve Length (in Inch):8.0</p>
                    </div>
                    <div className='single-product-detail-box'>
                        <p className='single-product-datail-head' >Product Details</p>
                        <div>
                            <p className='single-product-brand'>Brand:Burberry</p>
                              <p className='single-product-brand'>Product Name: Men's White "The Ryuk" Graphic Printed T-shirt</p>
                              <p className='single-product-brand'>Product Type: Full Sleeve T-shirt</p>
                        </div>

                    </div>
                    <div className='single-product-description'>
                        <p className='single-product-datail-head'>Description</p>
                        <p>Elevate your casual wardrobe with this stylish and comfortable men's full sleeve T-shirt from Burberry. 
                            The "The Ryuk" Graphic Printed design adds a touch of contemporary flair to your outfit, making it perfect for casual outings or relaxed days.
                             Crafted with high-quality fabric, this T-shirt ensures a comfortable fit and long-lasting wear.</p>
                    </div>
                </div>
            </div>
        </div>
     <Footer/>
        </>
        
    );
}

export default SingleWomenPage