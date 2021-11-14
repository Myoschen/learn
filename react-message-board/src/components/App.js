import React from "react";

import InputForm from "./InputForm";
import MessageContainer from "./MessageContainer";

const App = () => {
    return (
        <div className="message-board">
            <h1>React Message</h1>
            <InputForm />
            <MessageContainer />
        </div>
    );
}

export default App;