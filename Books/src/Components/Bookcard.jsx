import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Bookcard = ({ bookdata }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Link to={`/books/${bookdata.id}`}>
          <img
            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="books"
            width="100%"
          />
        </Link>
      </div>
      <div>{bookdata.book_name}</div>
      <div>{bookdata.category}</div>
      <div>{bookdata.release_year}</div>
      <button onClick={()=>{navigate(`/books/${bookdata.id}/edit`)}}>edit</button>
    </>
  );
};
