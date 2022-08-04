import axios from "axios";

export const submitInventory = async (milks, username, password, demo) => {
  const milkList = milks.map((milk) => milk.inventory.total);
  const body = { milks: milkList, username, password, demo };
  const { data } = await axios.post("/api/submits/inventory", body);
  return data;
};

export const submitOrder = async (milks, username, password, demo) => {
  const milkList = milks.map((milk) => milk.order.total);
  const body = { milks: milkList, username, password, demo };
  const { data } = await axios.post("/api/submits/order", body);
  return data;
};

export const getConfirmation = async () => {
  const { data } = await axios.get("/api/submits/confirmation");
  console.log(data);
  return data;
};
