import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'

// Functionality
// 1. user should be toggle checkbox 
// 2. user should be able to update data in url search useParams
// 3. the checkbox should remain selected (if it was already selected), when page refresh

function FilterSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const[sortBy,setSortBy]=useState(searchParams.get("sortBy") || "")
  const [category, setCategory] = useState(searchParams.getAll("genre") || []);

  const handleFilter = (e) => {
    const option = e.target.value;
    //if option is present in category array , remove it else add it in category
    let newCategory = [...category];

    if (newCategory.includes(option)) {
      // remove it
      newCategory.splice(newCategory.indexOf(option), 1)
    }
    else {
      // add it
      newCategory.push(option)
    }
    setCategory(newCategory);
  }

  const handleSortBy =(e) =>{
    setSortBy(e.target.value)

  }

  useEffect(() => {
    // initialize empty array
    const params = {};
    // adding all category in genre 
    category && (params.genre = category);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);

  }, [category, setSearchParams,sortBy])
  // above line we are telling whenever category changes setsearchparams
  return (
    <>
      <h2>Filter sort</h2>
      <div>
        <input type="checkbox" value="K-Pop" onChange={handleFilter}
          defaultChecked={category.includes('K-Pop')} />
        <label>K-Pop</label>
      </div>

      <div>
        <input type="checkbox" value="Country" onChange={handleFilter}
          defaultChecked={category.includes('Country')}
        />
        <label>Country</label>
      </div>

      <div>
        <input type="checkbox" value="Pop" onChange={handleFilter}
          defaultChecked={category.includes('Pop')}
        />
        <label>Pop</label>
      </div>

      <div>
        <input type="checkbox" value="heavyMetal" onChange={handleFilter}
          defaultChecked={category.includes('heavyMetal')}
        />
        <label>Heavy Metal</label>
      </div>

      <h2>Sort</h2>
      <div onChange={handleSortBy}>
        <div>
          <input type="radio" value="asc" name='sortBy'
          defaultChecked={sortBy ==="asc"}
           />
          <label>Acsending</label>
        </div>

        <div>
          <input type="radio" value="desc" name='sortBy'
            defaultChecked={sortBy ==="desc"}
             />
          <label>Descending</label>
        </div>
      </div>
    </>
  )
}

export default FilterSort