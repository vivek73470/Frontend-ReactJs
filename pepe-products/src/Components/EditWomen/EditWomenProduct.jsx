import React from 'react'
import '../../css/adminmen.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function EditWomenProduct() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    productImgTagSrc: '',
    plp: '',
    brand_namez: '',
    clr_shade_4: '',
    discountedPriceText: '',
    actualPriceText: '',
    discount_price_box: '',
  });

  async function EditProduct() {

    try {
      let res = await fetch(`http://localhost:3500/womensdata/${id}`, {
        method: 'PUT',

        body: JSON.stringify(formData),

        headers: {
          'Content-Type': 'application/json',
        },
      });

      let data = await res.json();
      console.log(data);
      setFormData({
        productImgTagSrc: '',
        plp: '',
        brand_namez: '',
        clr_shade_4: '',
        discountedPriceText: '',
        actualPriceText: '',
        discount_price_box: '',
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    EditProduct();
  };
  return (
    <>
    <div className="edit-product-screen">
      <div className="edit-product-wrapper">
        <span className='admin-edit-head'><h3>Edit Product</h3></span>
        <form className="edit-prdct-form" onSubmit={handleSubmit}>
          <input
            name="productImgTagSrc"
            type="text"
            className="edit-prdct-field"
            placeholder="productImgTagSrc"
            value={formData.productImgTagSrc}
            onChange={handleChange}
          />
          <br />
          <input
            name="plp"
            type="text"
            className="edit-prdct-field"
            placeholder="plp"
            value={formData.plp}
            onChange={handleChange}
          />
          <br />
          <input
            name="brand_namez"
            type="text"
            className="edit-prdct-field"
            placeholder="brand_namez"
            value={formData.brand_namez}
            onChange={handleChange}
          />
          <br />
          <input
            name="clr_shade_4"
            type="text"
            className="edit-prdct-field"
            placeholder="clr_shade_4"
            value={formData.clr_shade_4}
            onChange={handleChange}
          />
          <br />
          <input
            name="discountedPriceText"
            type="text"
            className="edit-prdct-field"
            placeholder="discountedPriceText"
            value={formData.discountedPriceText}
            onChange={handleChange}
          />
          <br />

          <input
            name="actualPriceText"
            type="text"
            className="edit-prdct-field"
            placeholder="actualPriceText"
            value={formData.actualPriceText}
            onChange={handleChange}
          />
          <br />

          <input
            name="discount_price_box"
            type="text"
            className="edit-prdct-field"
            placeholder="discount_price_box"
            value={formData.discount_price_box}
            onChange={handleChange}
          />
          <br />

          <button className="editproduct-button" onClick={() => EditProduct()}>
            Update
          </button>
        </form>
      </div>
    </div>
  </>
  )
}

export default EditWomenProduct