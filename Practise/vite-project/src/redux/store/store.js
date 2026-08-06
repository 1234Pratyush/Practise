import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter/counterSlice";
import productReducer from '../slice/productSlice.js';
import cartReducer from '../slice/cartSlice.js'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products:productReducer,
    cart:cartReducer
  },
});

export default store;
