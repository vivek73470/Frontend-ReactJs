import React, { useState, useEffect } from 'react';
import '../css/singlepage.css';
import { useLocation } from 'react-router-dom';
import Footer from '../Components/Footer/footer';
import Navbar from '../Components/Header/Header';

function SingleMenPage() {
    // apidata and selectedImage are state variables managed using the useState hook

    // apidata: Stores data retrieved from an API call.
    // selectedImage: Keeps track of the currently selected image.

    const [apidata, setApiData] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');
    const location = useLocation()


    async function singledata() {
        try {
            let a = location.pathname.split("/")[2]

            console.log(a)
            let res = await fetch(`http://localhost:3500/mensdata/${a}`);
            let data = await res.json();

            // You are fetching data from an API endpoint. Once the data is received (after converting it to JSON format),
            //  you use setData(data) to update the state variable apidata with the fetched data. By doing this,
            //   you trigger a re-render of your component with the updated data.
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
        <Navbar/>
        <div className='single-product-mainscreen'>
            <div className='single-product-wrapscreen'>
                <div className='single-product-sidebar'>
                    <div className='single-product-insidebar' >
                        {/*apidata- This is an array that contains information about multiple products */}

                        {/* apidata &&: This part uses the logical AND (&&) operator in JavaScript. 
                    It checks if apidata exists and is not null or undefined. If apidata is not null or undefined, the expression after && is evaluated. */}

                        {/* apidata.multi_image?.map((image, i) => (: Assuming apidata exists and multi_image exists within apidata, this code uses the optional chaining operator ?.. 
                    It tries to access the multi_image property of apidata. If  */}

                        {apidata && apidata.multi_image?.map((image, i) => (
                            <img
                                // key={i} The key attribute is a special attribute in React that helps
                                //  React identify which items have changed, are added, or are removed.
                                key={{ i }}
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

export default SingleMenPage;
