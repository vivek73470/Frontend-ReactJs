import React from "react";
import { Booklist } from "../Components/Booklist";
import { FilterComp } from "../Components/FilterComp";
import styled from "styled-components"
export const Books=()=>{
    return(
        <div>
            <BookPageWrapper>
                <FilterWrapper>
                    <FilterComp/>
                </FilterWrapper>
                <BookWrapper>
                    <Booklist/>
                </BookWrapper>
     
            </BookPageWrapper>
        

          
        </div>
    )
}

const BookPageWrapper=styled.div`
    display:flex;
    border:1px solid red;

`;

const FilterWrapper=styled.div`
    width:300px;
    border:1px solid red
`;


const BookWrapper=styled.div`
    width:100%;
    border:5px solid green;
    display:grid;
    grid-template-columns: 100px 100px 100px;
    //grid-template-columns:repeat(auto-fit, minmax(100px,max-content))
    grid-gap:150px;
    justify-content:center
`