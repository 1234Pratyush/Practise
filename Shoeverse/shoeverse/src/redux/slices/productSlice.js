import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export default productSlice.reducer;
