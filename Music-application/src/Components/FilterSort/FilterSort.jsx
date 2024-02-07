import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

// Functionality
// 1. user should be toggle checkbox 
// 2. user should be able to update data in url search useParams
// 3. the checkbox should remain selected (if it was already selected), when page refresh

const FilterSort= () => {
  const[searchParams, setSearchParams]= useSearchParams();
  const[category, setCategory] = useState(searchParams.getAll("genre") || []);

  const handleFilter =(e)=> {
    const option = e.target.value;
    //if option is present in category array , remove it , 
    // else add it to the category

let newCategory =[...category];
if(newCategory.includes(option)){
  // remove it
newCategory.splice(newCategory.indexOf(option), 1);
}
else{
  // add here
  newCategory.push(option);
}
setCategory(newCategory)
  }

  useEffect(()=> {
    const params ={};
    category && (params.genre = category);
setSearchParams(params);
  },[category,setSearchParams])
  // whenever category changes set the params

 
  return (
    <>
      <h2>Filter</h2>
      <div>
        <input type="checkbox" value="K-Pop"
        defaultChecked={category.includes('K-Pop')}
        onChange={handleFilter} />
        <label>K-Pop</label>
      </div>

      <div>
        <input type="checkbox" value="Country" 
          defaultChecked={category.includes('Country')}
        onChange={handleFilter} />
        <label>Country</label>
      </div>

      <div>
        <input type="checkbox" value="Pop"
          defaultChecked={category.includes('Pop')}
        onChange={handleFilter} />
        <label>Pop</label>
      </div>

      <div>
        <input type="checkbox" value="Heavy Metal"
          defaultChecked={category.includes('Heavy Metal')}
        onChange={handleFilter} />
        <label>Heavy Metal</label>
      </div>
    
    </>
  )
}

export default FilterSort