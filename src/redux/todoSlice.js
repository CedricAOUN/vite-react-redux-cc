import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), texte: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todoToToggle = state.todos.find((todo) => todo.id == action.payload);
      todoToToggle.completed = !todoToToggle.completed
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
