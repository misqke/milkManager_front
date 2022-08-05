import store from "./store";
import { setUser, clearUser } from "./userSlice";
import {
  setMilks,
  updateInvCrates,
  updateInvSingles,
  updateInvStacks,
  updateOrderCrates,
  updateOrderStacks,
  updateOrderSingles,
} from "./milkSlice";
import { setConfirmation, clearConfirmation } from "./confirmationSlice";

export {
  store,
  setUser,
  clearUser,
  setMilks,
  updateInvCrates,
  updateInvSingles,
  updateInvStacks,
  updateOrderCrates,
  updateOrderStacks,
  updateOrderSingles,
  setConfirmation,
  clearConfirmation,
};
