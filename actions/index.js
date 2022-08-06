import axios from "axios";
import login from "./login";
import { submitInventory, submitOrder, getConfirmation } from "./submit";

const startApi = async () => {
  const { data } = await axios.get("api/start");
  return data;
};

export { login, submitInventory, submitOrder, getConfirmation, startApi };
