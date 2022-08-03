import { createSlice } from "@reduxjs/toolkit";

const milkSlice = createSlice({
  name: "milks",
  initialState: {
    milks: [],
  },
  reducers: {
    setMilks: (state, { payload }) => {
      state.milks = payload.milks;
    },
    updateInvStacks: (state, { payload }) => {
      state.milks[payload.index].inventory.stacks = payload.value;
    },
    updateInvCrates: (state, { payload }) => {
      state.milks[payload.index].inventory.crates = payload.value;
    },
    updateInvSingles: (state, { payload }) => {
      state.milks[payload.index].inventory.singles = payload.value;
    },
    updateOrderStacks: (state, { payload }) => {
      state.milks[payload.index].order.stacks = payload.value;
    },
    updateOrderCrates: (state, { payload }) => {
      state.milks[payload.index].order.crates = payload.value;
    },
  },
});

export const {
  setMilks,
  updateInvCrates,
  updateInvSingles,
  updateInvStacks,
  updateOrderCrates,
  updateOrderStacks,
} = milkSlice.actions;
export default milkSlice.reducer;
