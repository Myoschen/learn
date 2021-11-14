import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo, setFilter } from "../redux/actions";
import Button from "./Button";
import Todo from "./Todo";

const TodoList = () => {
    const todoList = useSelector(state => state.todos);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();
    let check = filter === 'SHOW_TODO' ? false : true;

    // LocalStorage 
    localStorage.setItem('filter', filter);
    localStorage.setItem('todoList', JSON.stringify(todoList));

    return (
        <div className="todo__list">
            {
                todoList.filter(todo => todo.completed === check).map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            {...todo}
                            onRemoveClick={() => dispatch(removeTodo(todo.id))}
                            onToggleClick={() => dispatch(toggleTodo(todo.id))}
                        />
                    );
                })
            }
            <Button className="btn f-undo-done" color={'transparent'} func={() => dispatch(setFilter(check ? 'SHOW_TODO' : 'SHOW_DONE'))}>
                {!check ? 'GO DONE' : 'GO TODO'}
            </Button>
        </div>
    );
}

export default TodoList;