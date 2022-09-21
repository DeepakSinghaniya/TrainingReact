import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./slices/auth";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
