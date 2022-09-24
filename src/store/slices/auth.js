import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:2000";

export const signup = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = await axios.post(`${apiURL}/users/signup/`, data);
    return response.data;
  } catch (e) {
    throw JSON.stringify(e.response);
  }
});

export const login = createAsyncThunk("auth/login", async (data) => {
  try {
    const response = await axios.post(`${apiURL}/users/login/`, data);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("name", response.data.name);
    }
    return response.data;
  } catch (e) {
    throw JSON.stringify(e.response);
  }
});
const initialState = {
  singUp: {
    isLoading: false,
    data: null,
    error: null,
  },
  login: {
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
      state.singUp.error = JSON.parse(action.error.message);
      state.singUp.data = null;
    });
    builder.addCase(login.pending, (state, action) => {
      state.login.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.isLoading = false;
      state.login.data = action.payload;
      state.login.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.isLoading = false;
      state.login.error = JSON.parse(action.error.message);
      state.login.data = null;
    });
  },
});

export default authSlice.reducer;
