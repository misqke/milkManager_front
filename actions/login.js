import axios from "axios";

const login = async (credentials) => {
  try {
    const { data } = await axios.post("api/milks", credentials);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

export default login;
