import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:2000";

export const signup = createAsyncThunk("auth/signup", async (data) => {
  const response = await axios.post(`${apiURL}/users/signup/`, data);
  return response.data;
});

const initialState = {
  singUp: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signup.pending, (state, action) => {
      state.singUp.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.singUp.isLoading = false;
      state.singUp.data = action.payload;
      state.singUp.error = null;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.singUp.isLoading = false;
      state.singUp.error = action.payload ? action.payload : action.error;
      state.singUp.data = null;
    });
  },
});

export const { increment, decrement, incrementByAmount } = authSlice.actions;
export default authSlice.reducer;
