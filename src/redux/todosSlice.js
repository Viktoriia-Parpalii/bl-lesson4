import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, deleteTodo } from './operations';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: {
    [fetchTodos.pending](state) {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchTodos.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    ////////////////////////addTodos////////////////
    [addTodo.pending](state) {
      state.isLoading = true;
    },
    [addTodo.fulfilled](state, { payload }) {
      state.items.push(payload);
      state.isLoading = false;
    },
    [addTodo.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },

    /////////////////////deleteTodo///////////////////

    [deleteTodo.pending](state) {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled](state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
      state.isLoading = false;
    },
    [deleteTodo.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const todosReducer = todosSlice.reducer;
