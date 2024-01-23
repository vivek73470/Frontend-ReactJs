import React from 'react'
import '../css/home.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Footer from '../Components/Footer/footer'
import Image1gif from '../Assets/image 1.gif'
import Image2 from '../Assets/image 2.webp'
import Image3 from '../Assets/image 3.gif'
import Image4 from '../Assets/image 4.webp'
import Image5 from '../Assets/image 5.webp'
import HomeBanner from '../Assets/Banner.jpg'
import Image6 from '../Assets/image 6.webp'
import Image7 from '../Assets/image 7.webp'
import Image8 from '../Assets/image 8.webp'
import Image9 from '../Assets/image 9.webp'
import Image10 from '../Assets/image 10.webp'
import Popular from './Popular'
import NewArrivals from './NewArrivals'
import CategoryToBag from './CategoryToBag'
import BestSeller from './BestSeller';
import StupidCollection from './StupidCollection'
import Navbar from '../Components/Header/Header'


const Home = () => {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 2000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear"
  // };

  return (
    <>
    <Navbar/>
      <div className='home-container'>
        <div className='home-wrapper'>
          <div className='home-1st-page'>
          {/* <Slider {...settings}> */}
            <div className='home-1st-page-inside'>
              <div className='home-1st-page-inside-image-slider'>
                <img src={Image1gif} alt='home1' />
              </div>
              <div className='home-1st-page-inside-image-slider'>
                <img src={Image2} alt='home1' />
              </div>
              <div className='home-1st-page-inside-image-slider'>
                <img src={Image3} alt='home1' />
              </div>
              <div className='home-1st-page-inside-image-slider'>
                <img src={Image4} alt='home1' />
              </div>
              <div className='home-1st-page-inside-image-slider'>
                <img src={Image5} alt='home1' />
              </div>
            </div>
            {/* </Slider> */}

          </div>
          <div className='home-2nd-page'>
            <div className='home-2nd-page-banner'>
              <img src={HomeBanner} alt='home-banner' />
            </div>
          </div>
          <div className='home-3rd-page'>
            <div className='home-3rd-page-wrap'>
              <div className='home-3rd-page-multi-images'>
                <img src={Image6} alt='home3' />
                <p>Bestsellers</p>
              </div>
              <div className='home-3rd-page-multi-images'>
                <img src={Image7} alt='home3' />
                <p>New Arrivals</p>
              </div>
              <div className='home-3rd-page-multi-images'>
                <img src={Image8} alt='home3' />
                <p>Hot Deals</p>
              </div>
              <div className='home-3rd-page-multi-images'>
                <img src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg" alt="" />
                <p>Official Collaborations</p>
              </div>
              <div className='home-3rd-page-multi-images'>
                <img src="https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg" alt="" />
                <p>Last Sizes Left</p>
              </div>
              <div className='home-3rd-page-multi-images'>
                <img src="https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg" alt="" />
                <p>Plus Size</p>
              </div>

            </div>

          </div>
          <div className='home-4th-page'>
            <div className='home-4th-page-wrap'>
              <div className='home-4th-page-multi'>
                <img src={Image9} alt='home1' />
              </div>
              <div className='home-4th-page-multi'>
                <img src={Image10} alt='home1' />
              </div>
            </div>
          </div>
          <Popular/>
          <NewArrivals/>
          <CategoryToBag/>
          <BestSeller/>
          <StupidCollection/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home