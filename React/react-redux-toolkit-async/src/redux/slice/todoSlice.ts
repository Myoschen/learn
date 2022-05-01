import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todoList: Todo[] | undefined;
  status: 'success' | 'error' | 'loading' | undefined;
  message: string | undefined
}

const initialState: TodoState = {
  todoList: undefined,
  status: undefined,
  message: undefined,
}

export const fetchTodo = createAsyncThunk<Todo[], void, { rejectValue: string }>(
  'todo/fetchTodo', async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(API_URL);
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
)

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.todoList = undefined;
      state.status = 'loading';
      state.message = 'Loading.';
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = 'success';
      state.message = 'fetch successful.';
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.todoList = undefined;
      state.status = 'error';
      state.message = action.payload;
    });
  },
});

export const todoReducer = todo.reducer;