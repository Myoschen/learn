import React from "react";
import { useDispatch, useStore } from "react-redux";
import { addTodo } from "../redux/actions";
import Button from "./Button";

const Input = () => {
    const store = useStore();
    const dispatch = useDispatch();
    let input;
    return (
        <div className="todo__input">
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim())
                    return;
                dispatch(addTodo(input.value));
                console.log(store.getState())
                input.value = '';
            }}>
                <input type="text" ref={node => input = node} />
                <Button type="submit" className="btn" color={'green'}>ADD</Button>
            </form>
        </div>
    )
}

export default Input;
