import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled(SearchBar)`
    font-size: 16px;
    background-color: #3a9;
    padding: 20px;
    border-radius: 5mm 5mm 0 0;
    input {
        box-sizing: border-box;
        width: 100%;
        padding: 10px;
        font-size: 1.2em;
        letter-spacing: 1px;
        border: 4px dotted transparent;
        outline: none;
        transition: all .5s;
        &:focus {
            border: 4px dotted #3a9;
            border-radius: 2mm;
            &::placeholder {
                color: #000;
            }
        }
    }
`;

function SearchBar(props) {

    return (
        <div className={props.className}>
            <input type='text' onChange={props.handleChange} placeholder="Search ..." />
        </div>
    );
}

export default StyledSearchBar;