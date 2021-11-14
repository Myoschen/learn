import { combineReducers } from "redux";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_FILTER } from "./actions";

function filter(state = 'SHOW_TODO', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            const { id, text } = action.payload;
            return [
                ...state,
                {
                    id: id,
                    content: text,
                    completed: false
                }
            ];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.id)
                    return { ...todo, completed: !todo.completed }
                return todo;
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    todos,
    filter
});

export default todoApp;