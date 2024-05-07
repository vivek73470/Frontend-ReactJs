import React from "react";
import './filter.css'
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react"

const Filter = () => {
  const [searchParams, setSerchparams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.getAll("category") || [])
 
  const handleChange = (e) => {
    const option = e.target.value
    const newCategory = [...category]
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1)
    } else {
      newCategory.push(option)
    }
    setCategory(newCategory)
  }

  useEffect(() => {
    if (category) {
      setSerchparams({ category })
    }
  }, [category, setSerchparams])

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox"
            value="men's clothing"
            checked={category.includes("men's clothing")}
            onChange={handleChange} />
          <label>Men cloths</label>
        </div>
        <div>
          <input type="checkbox"
            value="bags"
            checked={category.includes("bags")}
            onChange={handleChange} />
          <label>Bags</label>
        </div>
        <div>
          <input type="checkbox"
            value="covers"
            checked={category.includes("covers")}
            onChange={handleChange} />
          <label>Mobile Covers</label>
        </div>
        <div className="">
          <input type="checkbox"
            value="women's clothing"
            checked={category.includes("women's clothing")}
            onChange={handleChange}
            />
          <label>Women cloths</label>
        </div>
      </div>
    </div>
  );
};

export { Filter }
