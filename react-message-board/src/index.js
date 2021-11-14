import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";


// Components
import App from "./components/App"

// CSS
import "./assets/css/all.css";

// Redux
import messageBoard from "./redux/reducers";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(messageBoard, composeEnhancer());
const store = createStore(messageBoard);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)