import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
    const todoList = useSelector(state => state.todos);
    return (
        <div className="todo__list">
            {todoList.map(todo => <div key={todo.id}>{todo.content}</div>)}
        </div>
    )
}

export default Test;