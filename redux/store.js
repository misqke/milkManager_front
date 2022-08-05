import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import milkReducer from "./milkSlice";
import confirmationReducer from "./confirmationSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    milk: milkReducer,
    confirmation: confirmationReducer,
  },
});

export default store;
