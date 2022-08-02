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
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
