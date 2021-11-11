import React from "react";
import styled from "styled-components";

const StyledResult = styled(Result)`
    padding: 10px;
    .name {    
        font-weight: 700;
    }
    .price, .description {
        font-weight: 400;
        letter-spacing: 0.5px;
    }
    .price {
        display: inline-block;
        margin: 0;
        padding: 10px;
        border-radius: 2mm;
        background-color: #3a9;
        color: #eee;
    }
    .description {
        line-height: 2;
    }
`;

function Result(props) {
    return (
        <div className={props.className}>
            <h2 className='name'>{props.product.name}</h2>
            <p className='price'>$ {props.product.price}</p>
            <p className='description'>{props.product.description}</p>
        </div>
    );
}

export default StyledResult;