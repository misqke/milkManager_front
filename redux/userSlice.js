import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    username: "",
    password: "",
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.username = payload.username;
      state.password = payload.password;
    },
    clearUser: (state) => {
      state.name = "";
      state.username = "";
      state.password = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
