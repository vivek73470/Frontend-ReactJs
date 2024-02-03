import React from 'react'
import '../BestSeller/index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function BestSeller() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    const [homeData, setHomeData] = useState([]);

    async function getData() {
        try {
            let res = await fetch(`http://localhost:3500/womensdata?_limit=12`);
            let data = await res.json();
            console.log(data)
            setHomeData(data);
            console.log(homeData)

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
    <div className='best-seller-screen'>
      <div className='best-heading'>
                        <h2>Best Sellers</h2>
                    </div>
                    <Link to="/womencloths">
                        <div className='seller-design-data'>
                        <Slider {...settings}>
                            {homeData.length > 0 && homeData.map((elem) =>
                                <div className='best-seller-imgee' key={elem.id}>
                                    <img src={elem.productImgTagSrc} alt='' />
                                </div>
                            )}
                              </Slider>
                        </div>
                    </Link>
                    </div>
    </>
  )
}

export default BestSeller;