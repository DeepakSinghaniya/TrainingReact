import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth";
import usersReducer from "./slices/users";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
});
