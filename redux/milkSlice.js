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
      const milk = state.milks[payload.index];
      const newTotal =
        Number(payload.value) * 6 * Number(milk.multiplier) +
        Number(milk.inventory.crates) * Number(milk.multiplier) +
        Number(milk.inventory.singles);
      state.milks[payload.index].inventory.total = newTotal;
    },
    updateInvCrates: (state, { payload }) => {
      state.milks[payload.index].inventory.crates = payload.value;
      const milk = state.milks[payload.index];
      const newTotal =
        Number(milk.inventory.stacks) * 6 * Number(milk.multiplier) +
        Number(payload.value) * Number(milk.multiplier) +
        Number(milk.inventory.singles);
      state.milks[payload.index].inventory.total = newTotal;
    },
    updateInvSingles: (state, { payload }) => {
      state.milks[payload.index].inventory.singles = payload.value;
      const milk = state.milks[payload.index];
      const newTotal =
        Number(milk.inventory.stacks) * 6 * Number(milk.multiplier) +
        Number(milk.inventory.crates) * Number(milk.multiplier) +
        Number(payload.value);
      state.milks[payload.index].inventory.total = newTotal;
    },
    updateOrderStacks: (state, { payload }) => {
      state.milks[payload.index].order.stacks = payload.value;
      const milk = state.milks[payload.index];
      const newTotal =
        Number(payload.value) * 6 * Number(milk.multiplier) +
        Number(milk.order.crates) * Number(milk.multiplier) +
        Number(milk.order.singles);
      state.milks[payload.index].order.total = newTotal;
    },
    updateOrderCrates: (state, { payload }) => {
      state.milks[payload.index].order.crates = payload.value;
      const milk = state.milks[payload.index];
      const newTotal =
        Number(milk.order.stacks) * 6 * Number(milk.multiplier) +
        Number(payload.value) * Number(milk.multiplier) +
        Number(milk.order.singles);
      state.milks[payload.index].order.total = newTotal;
    },
    updateOrderSingles: (state, { payload }) => {
      state.milks[payload.index].order.singles = payload.value;
      const milk = state.milks[payload.index];
      const newTotal =
        Number(milk.order.stacks) * 6 * Number(milk.multiplier) +
        Number(milk.order.crates) * Number(milk.multiplier) +
        Number(payload.value);
      state.milks[payload.index].order.total = newTotal;
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
  updateOrderSingles,
} = milkSlice.actions;
export default milkSlice.reducer;
