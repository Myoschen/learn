import React from "react";
import { useState } from "react";

// Components
import Item from "./Item";
import Button from "./Button";

function List(props) {
    const [done, setDone] = useState(false);

    const todoList = props.todoList;
    const handleTodoList = () => {
        return todoList.filter((item) => item.done === done).map((item) => {
            return (
                <Item
                    key={item.key}
                    content={item.content}
                    doneBtn={item.done}
                    remove={() => props.func.removeTodoList(item.key)}
                    done={() => props.func.doneTodoList(item.key)}
                />
            );
        });
    }

    const handleToggle = () => {
        setDone(!done);
    }

    return (
        <div className="todo__list">
            {handleTodoList()}
            {
                todoList.length > 0 &&
                <Button className="btn f-undo-done" color={'transparent'} func={handleToggle}>{done ? 'DONE' : 'UNDO'}</Button>
            }
        </div>
    );
}

export default List;