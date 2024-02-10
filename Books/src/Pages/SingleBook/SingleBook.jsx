import React, { useEffect,useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Bookcard } from "../../Components/Bookcard/Bookcard";
import { getbooks } from "../../Redux/Appdata/action";
import {useDispatch,useSelector} from "react-redux"

export const SingleBook=()=>{
   const location=useLocation()
   const {id}=useParams()
    const books=useSelector(store=>store.appreducer.books)
    const [currentBook,setCurrentBook]=useState({})
    const dispatch=useDispatch()

   //fetching te data
useEffect(()=>{
    if(books.length===0){
        dispatch(getbooks())
    }
},[books.length,dispatch])

   //get the data form the redux store.
   useEffect(()=>{
    if(id){
        const book=books.find(item=>item.id===Number(id))
        book && setCurrentBook(book)
    }
   },[id,books])
    return(
        <div>
        <div>SingleBook</div>
        {/* <div>{currentBook.author}</div>
        <div>{currentBook.book_name}</div>
        <div>{currentBook.category}</div>
        <div>{currentBook.release_year}</div> */}
         <Bookcard bookdata={currentBook}/>
        </div>
    )
}

//Search params :anything after ?
//params :anything before ?