import React from 'react'
import '../css/adminaddprod.css'

function AddMobileproduct() {
    const [data, setData] = React.useState({
        id: '',
        productImgTagSrc: '',
        brand_namez: '',
        clr_shade_4: '',
        discountedPriceText: '',
        actualPriceText:'',
        discount_price_box:''
      })
    
      async function addproduct() {
        let res = await fetch(`http://localhost:3500/mensdata`, {
          method: 'POST',
    
          body: JSON.stringify(data),
    
          headers: {
            'Content-Type': 'application/json',
          },
    
    
        });
    
        let dat = await res.json();
        console.log(dat);
        setData({
          id: '',
          productImgTagSrc: '',
          brand_namez: '',
          clr_shade_4: '',
          discountedPriceText: '',
          actualPriceText:'',
          discount_price_box:''
        }
        )
      }
    
      const handleChange = (e) => {
    
        setData((prevdata) => ({
          ...prevdata,
          [e.target.name]: e.target.value
        }))
    
      }
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setData(data)
      }
  return (
    <>
    <div className="container-addproduct">
      <h1 className='addproduct-title'>Add Mobile's Product</h1>
      <form className='addproduct-form' onSubmit={handleSubmit}>
        <input
          name='id'
          type="text"
          className='addproduct-input'
          id="Id"
          placeholder="Id"
          value={data.id}
          onChange={handleChange}
        />
        <br />
        <input
          name='productImgTagSrc'
          type="text"
          className='addproduct-input'
          id="title"
          placeholder="productImgTagSrc"
          value={data.productImgTagSrc}
          onChange={handleChange}
        />
        <br />
        <input
          name='brand_namez'
          type="text"
          className='addproduct-input'
          id="author"
          placeholder="brand_namez"
          value={data.brand_namez}
          onChange={handleChange}
        />
        <br />
        <input
          name='clr_shade_4'
          type="text"
          className='addproduct-input'
          id="author"
          placeholder="clr_shade_4"
          value={data.clr_shade_4}
          onChange={handleChange}
        />
        <br />
        <input
          name='discountedPriceText'
          type="text"
          className='addproduct-input'
          id="image"
          placeholder="discountedPriceText"
          value={data.discountedPriceText}
          onChange={handleChange}
        />
        <br />

        <input
          name='actualPriceText'
          type="text"
          className='addproduct-input'
          id="image"
          placeholder="actualPriceText"
          value={data.actualPriceText}
          onChange={handleChange}
        />
        <br />

        <input
          name='discount_price_box'
          type="text"
          className='addproduct-input'
          id="image"
          placeholder="discount_price_box"
          value={data.discount_price_box}
          onChange={handleChange}
        />
        <br />

        <button className='addproduct-button' onClick={addproduct}>submit</button>
      </form>
    </div>

  </>
  )
}

export default AddMobileproduct