import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const FilterComp = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCtaegory = searchParams.getAll("category");
  const initalSort = searchParams.getAll("sort");

  const [category, setcategory] = useState(initialCtaegory || []);
  
  const [sort, setsortby] = useState(initalSort[1] || "");
  //whenever the page refreshes,we need to check if the url had any data ,
  //before setting the data to an empty array.

  const handleFilterCheckbox = (e) => {
    //check if the data is predent in the category
    const newCategories = [...category];
    if (newCategories.includes(e.target.value)) {
      newCategories.splice(newCategories.indexOf(e.target.value), 1);
      //remove it
    } else {
      //else add it in the category array
      newCategories.push(e.target.value);
    }
    setcategory(newCategories);
  };

  const handleSort = (e) => {
    setsortby(e.target.value);
  };

  //if the category changes,then update the value in the URL search params
  useEffect(() => {
    let params = {};
    params.category = category;
    sort && (params.sort = sort);
    setSearchParams(params);
  }, [category, setSearchParams, sort]);

  return (
    <div>
      <h3>Filter Component</h3>
      <div>
        <div>
          <input
            type="checkbox"
            value="Novel"
            checked={category.includes("Novel")}
            onChange={handleFilterCheckbox}
          />
          <label>Novel</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Motivational"
            checked={category.includes("Motivational")}
            onChange={handleFilterCheckbox}
          />
          <label>Motivational</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Science_Fiction"
            checked={category.includes("Science_Fiction")}
            onChange={handleFilterCheckbox}
          />
          <label>Science Fiction</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Thriller"
            checked={category.includes("Thriller")}
            onChange={handleFilterCheckbox}
          />
          <label>Thriller</label>
        </div>
      </div>
      <h3>Sort Component</h3>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sort === "asc"}
        />
        <label>Assending</label>
        <br />
        <input
          type="radio"
          value="desc"
          name="sortBy"
          defaultChecked={sort === "desc"}
        />
        <label>Desending</label>
      </div>
    </div>
  );
};
