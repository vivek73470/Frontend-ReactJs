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
