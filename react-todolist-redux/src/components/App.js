import React from "react";

// Components
import Title from "./Title";
import Input from "./Input";
import TodoList from "./TodoList";
// import Test from "./Test";

function App() {

    return (
        <div className="todo-app">
            <Title>Todo List</Title>
            <Input />
            <TodoList />
            {/* <Test /> */}
        </div>
    );
}

export default App;