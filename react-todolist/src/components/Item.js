import React from "react";
import Button from "./Button";

function Item(props) {
    return (
        <div className="item">
            <div className="item__content">
                {props.content}
            </div>
            <div className="item__control">
                <Button className="btn remove" color={'red'} func={props.remove}>REMOVE</Button>
                {!props.doneBtn && <Button className="btn done" color={'green'} func={props.done}>DONE</Button>}
            </div>
        </div>
    );
}

export default Item;