import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid(),
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
      const todo = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return action.payload;
        } else {
          return todo;
        }
      });
      state.todos.push(todo);
    },
  },
});

export const { addToDo, removeToDo, updateToDo } = todoSlice.actions;

export default todoSlice.reducer;
