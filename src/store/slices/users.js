import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { http } from "../http";

export const getUsers = createAsyncThunk("users", async (data) => {
  try {
    const response = await http.get(`/users/`);
    console.log("step one");
    return response.data;
  } catch (e) {
    throw JSON.stringify(e.response);
  }
});

const initialState = {
  users: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.users.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users.isLoading = false;
      state.users.data = action.payload;
      state.users.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.users.isLoading = false;
      state.users.error = JSON.parse(action.error.message);
      state.users.data = null;
    });
  },
});

export default userSlice.reducer;
