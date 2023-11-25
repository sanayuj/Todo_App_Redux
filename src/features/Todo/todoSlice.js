import { nanoid, createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: Todo,
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo:{
        
    }
  },
});
