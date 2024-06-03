import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: { value: 0, mValue: 0 },
  reducers: {
    up: (state, action) => {
      state.value = state.value + action.step;
    },
    down: (state, action) => {
      state.mValue = state.mValue - action.step;
    },
  },
});

export default counterSlice;
