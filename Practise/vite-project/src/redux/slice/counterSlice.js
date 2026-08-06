import { createSlice } from "@reduxjs/toolkit";

const initialState ={
items : 0
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.items += 1;
    },
    decrement: (state) => {
      state.items -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
