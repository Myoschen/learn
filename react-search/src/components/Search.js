import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Results from "./Results";

const StyledSearch = styled(Search)`
    width: 440px;
    margin: 75px 0;
    box-shadow: 3px 3px 5px #333;
    border-radius: 5mm;
    background-color: #eee;
`;

function Search(props) {

    const [input, setInput] = useState('');

    const handleChange = (event) => {
        setInput(event.target.value.toLowerCase().trim())
    }

    // const queryProduct = () => {
    // }

    return (
        <div className={props.className}>
            <SearchBar className="search-bar" handleChange={handleChange} />
            <Results className="results" products={props.products} query={input} />
        </div>
    );
}

export default StyledSearch;