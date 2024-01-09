import React from 'react'
import '../css/bestseller.css';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function BestSeller() {
    const [homeData, setHomeData] = useState([]);

    async function getData() {
        try {
            let res = await fetch(`http://localhost:3500/womensdata?_limit=5`);
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
                            {homeData.length > 0 && homeData.map((elem) =>
                                <div className='best-seller-imgee' key={elem.id}>
                                    <img src={elem.productImgTagSrc} alt='' />
                                </div>
                            )}
                        </div>
                    </Link>
                    </div>
    </>
  )
}

export default BestSeller;