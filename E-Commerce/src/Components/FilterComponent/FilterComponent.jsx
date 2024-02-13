import React, { useEffect, useState } from 'react';
import './filter.css';
import { useSearchParams } from 'react-router-dom';

function FilterComponent() {
  const[searchParams,setSearchParams] = useSearchParams();
  const [categoryValues, setCategoryValues] = useState([]);

  const categoryHandler = (e) => {
    const value = e.target.value;
    setCategoryValues((prevValues) => {
      if (e.target.checked) {
        // If checkbox is checked, add the value
        return [...prevValues, value];
      } else {
        // If checkbox is unchecked, remove the value
        return prevValues.filter((category) => category !== value);
      }
    });
  };

  useEffect(()=>{
    //if it is true means has a value not null
    if(categoryValues){
      setSearchParams({category:categoryValues},{replace:true})
    }
  },[categoryValues,setSearchParams]);
  // the effect should re-run whenever categoryValues or setSearchParams changes



  return (
    <>
      <div className='filter-screen'>
        <div className='filter-wrapper'>
          <span className='filter-sizee'><p>Filter</p></span>
          <span className='filtr-catg'><p>Category</p></span>
          <div onChange={categoryHandler} defaultValue={categoryValues}>
            <div>
              <input
                type="checkbox"
                value="men's clothing"
              />
              <label>Men's Clothing</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="women's clothing"
          
              />
              <label>Women's Clothing</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="jewelery"
        
              />
              <label>Jewelery</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="electronics"
    
              />
              <label>Electronics</label>
            </div>
            <div>
              <input
                type="checkbox"
                value="bags"
        
              />
              <label>Bags</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterComponent;
