import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://655e243b9f1e1093c59a9554.mockapi.io";
axios.defaults.baseURL = BASE_URL;

export const getTask = createAsyncThunk(
  "tasks/getTask",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/todo");
      console.log("response.data :>> ", response.data);

      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async ({ todoItem, priorityNumber }, thunkAPI) => {
    try {
      const response = await axios.post("/todo", { todoItem, priorityNumber });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/todo/${id}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
