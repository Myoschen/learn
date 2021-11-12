import React from "react";
import Button from "./Button";

function Input(props) {
    return (
        <div className="todo__input">
            <input type="text" ref={props.inputRef} />
            <Button className="btn add" color={'green'} func={props.func}>ADD</Button>
        </div>
    );
}

export default Input;