import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import strSlice from "./slice/strSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    append: strSlice.reducer,
  },
});

export default store;
