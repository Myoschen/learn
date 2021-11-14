import { v4 as uuid_v4 } from "uuid";

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_FILTER = 'SET_FILTER';

export function addTodo(text) {
    const id = uuid_v4();
    return {
        type: ADD_TODO,
        payload: {
            id,
            text
        }
    };
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id
    };
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id
    };
}

export function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter
    };
}