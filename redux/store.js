import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import milkReducer from "./milkSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    milk: milkReducer,
  },
});

export default store;
