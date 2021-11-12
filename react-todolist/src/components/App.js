import React from "react";
import { useState, useRef } from "react";

// Components
import Title from "./Title";
import Input from "./Input";
import List from "./List";

const { v1: uuidv4 } = require('uuid');

function App() {
    const inputRef = useRef();
    const [todoList, setTodoList] = useState([]);

    const addTodoList = () => {
        if (inputRef.current.value !== '')
            setTodoList([...todoList, { key: uuidv4(), content: inputRef.current.value, done: false }]);
        inputRef.current.value = '';
    }

    const removeTodoList = (id) => {
        setTodoList(
            todoList.filter((item) => item.key !== id)
        );
    }

    const doneTodoList = (id) => {
        setTodoList(
            todoList.map((item) => {
                if (item.key === id)
                    item.done = true;
                return item
            })
        );
    }

    return (
        <div className="todo-app">
            <Title>Todo List</Title>
            <Input inputRef={inputRef} func={addTodoList} />
            <List todoList={todoList} func={{ removeTodoList, doneTodoList }} />
        </div>
    );
}

export default App;