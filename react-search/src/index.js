import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";
import './css/all.css';

const products = require('./components/products');


ReactDOM.render(
    <Search className='search' products={products} />,
    document.getElementById('root')
);