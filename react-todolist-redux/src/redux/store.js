import { createStore } from "redux";
import todoApp from "./reducers";
// import { addTodo, setFilter } from "./actions";

const store = createStore(todoApp);

// Test
// // Record the initial state
// console.log(store.getState());

// // Subscribe
// let unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addTodo('Learn English'))
// store.dispatch(addTodo('Learn React'))
// store.dispatch(addTodo('Learn Golang'))
// store.dispatch(setFilter('SHOW_DONE'))
// store.dispatch(setFilter('SHOW_TODO'))

// // Unsubscribe()
// unsubscribe()

export default store;