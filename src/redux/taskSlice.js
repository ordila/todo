import { createSlice } from "@reduxjs/toolkit";
import { addTask, deleteTask, getTask } from "./api";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    setItems: (state, action) => [(state.items = action.payload)],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTask.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(getTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (task) => task.id !== action.payload.id
        );
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addTask.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setItems } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
export const selectItems = (state) => state.tasks.items;
export const selectError = (state) => state.tasks.error;
export const selectIsLoading = (state) => state.tasks.isLoading;
