import { configureStore } from "@reduxjs/toolkit";

import reducer from "./slices/counter";

export const store = configureStore({
  reducer: {
    counter: reducer,
  },
});
