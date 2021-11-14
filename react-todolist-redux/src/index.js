// Library
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Reducer
import todoApp from "./redux/reducers";

// Components
import App from "./components/App";

// CSS
import "./css/all.css";

// LocalStorage 
const initialTodoList = JSON.parse(localStorage.getItem('todoList')) || [];
const initialFilter = localStorage.getItem('filter') || '';
const initialData = { filter: initialFilter, todos: initialTodoList };

// console.log(typeof (initialFilter))
// console.log(typeof (initialTodoList))

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(todoApp, composeEnhancer());
const store = createStore(todoApp, initialData);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);