import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "#todo list",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeToDo: (state, action) => {
      const todo = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = todo;
    },
    updateToDo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
    },
  },
});

export const { addToDo, removeToDo, updateToDo } = todoSlice.actions;

export default todoSlice.reducer;
