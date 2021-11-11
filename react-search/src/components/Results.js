import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Result from "./Result";

const StyledResults = styled(Results)`
    box-sizing: border-box;
    width: 100%;
    /* margin-top: 20px; */
    padding: 10px;
    div+div {
        margin-top: 20px;
        border-top: 2px solid #000;
    }
`;

function Results(props) {

    const [foundProducts, setFoundProducts] = useState([]);

    useEffect(() => {
        const foundProducts = props.products.filter(product => {
            return product.name.toLowerCase().match(props.query) ||
                product.description.toLowerCase().match(props.query)
        });

        setFoundProducts(foundProducts);

    }, [props.query]);

    return (
        <div className={props.className}>
            {
                foundProducts.map((product, index) => {
                    return (
                        <Result className="in-stock" product={product} key={index} />
                    )
                })
            }
        </div>
    );
}

export default StyledResults;