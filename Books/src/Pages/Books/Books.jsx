import React from "react";
import './index.css';
import { Booklist } from "../../Components/Booklist/Booklist";
import { FilterComp } from "../../Components/FilterComp/FilterComp";
import styled from "styled-components"
export const Books = () => {
    return (
        <div className="book-screen">
            <div className="Bookfilter">
                <FilterComp />
            </div>
            <div className="Bookwrap">
                <Booklist />
            </div>

        </div>
    )
}

const BookPageWrapper = styled.div`
    display:flex;
    border:1px solid red;

`;

const FilterWrapper = styled.div`
    width:300px;
    border:1px solid red
`;


const BookWrapper = styled.div`
    width:100%;
    border:5px solid green;
    display:grid;
    grid-template-columns: 100px 100px 100px;
    //grid-template-columns:repeat(auto-fit, minmax(100px,max-content))
    grid-gap:150px;
    justify-content:center
`