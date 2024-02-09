import React from "react";
import  { useEffect,useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Bookcard } from "../Components/Bookcard";
import { getbooks } from "../Redux/Appdata/action";
import {useDispatch,useSelector} from "react-redux"

export const EditBook=()=>{
   
    const {id}=useParams()
    const books=useSelector(store=>store.appreducer.books)
    const [currentBook,setCurrentBook]=useState({})
    const dispatch=useDispatch()
    const [title,setTitle]=useState()
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
       book && setTitle(book.book_name)
    }
   },[id,books])
    return(
        <div>
            <h1>Edit Page</h1>
            <div>
                {/* author,name */}
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.ariaValueNow)}/>
                <input/>
                <button>update</button>
            </div>
        </div>

    )
}