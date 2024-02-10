import React, { useEffect } from "react";
import './index.css'
import {useSelector,useDispatch} from "react-redux"
import { getbooks } from "../../Redux/Appdata/action";
import { Bookcard } from "../Bookcard/Bookcard";
import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

export const Booklist=()=>{
    const books=useSelector(store=>store.appreducer.books)
    const dispatch=useDispatch()
    const location=useLocation()
   
    const [searchParams]=useSearchParams()

    useEffect(()=>{
        //if i dont have any books in redux,then make the api call
        if(location || books.length===0){
            const sortBy=searchParams.get("sort")
            const getBookParms={
                params:{
                    category:searchParams.getAll("category"),
                    _sort:sortBy && "release_year",
                    _order:sortBy
                }
            }
            dispatch(getbooks(getBookParms))
        }
    },[books.length,dispatch,location.search])
    return(
        <>
            {books.length>0 && 
            books.map((singlebook)=>{
                return <div className="booklist-design" key={singlebook.id}>
                   
                    <Bookcard  bookdata={singlebook} />
                   
                </div>
            })}
        </>
    )
}
