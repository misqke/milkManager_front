import { createSlice } from "@reduxjs/toolkit";

const confirmationSlice = createSlice({
  name: "confirmation",
  initialState: {
    message: "",
    image: "",
  },
  reducers: {
    setConfirmation: (state, { payload }) => {
      state.message = payload.message;
      state.image = payload.image;
    },
    clearConfirmation: (state, { payload }) => {
      state.message = "";
      state.image = "";
    },
  },
});

export const { setConfirmation, clearConfirmation } = confirmationSlice.actions;
export default confirmationSlice.reducer;
