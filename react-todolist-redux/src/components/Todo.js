import React from "react";
import Button from "./Button";

const Todo = ({ content, completed, onRemoveClick, onToggleClick }) => {
    return (
        <div className="item">
            <div className="item__content">
                {content}
            </div>
            <div className="item__control">
                <Button className="btn" color={'red'} func={onRemoveClick}>REMOVE</Button>
                {!completed && <Button className="btn" color={'green'} func={onToggleClick}>DONE</Button>}
            </div>
        </div>
    );
}

export default Todo;