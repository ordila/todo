import { createSlice, isAnyOf } from "@reduxjs/toolkit";
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
      .addCase(getTask.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (task) => task.id !== action.payload.id
        );
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addMatcher(
        isAnyOf(getTask.pending, deleteTask.pending, addTask.pending),
        (state, _) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getTask.rejected, deleteTask.rejected, addTask.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      );
  },
});

export const { setItems } = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
