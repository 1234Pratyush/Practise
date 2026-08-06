import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
