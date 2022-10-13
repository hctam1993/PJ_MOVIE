import { createSlice } from "@reduxjs/toolkit";
import { localService } from "../../services/localService";

const initialState = {
  isLogin: true,
  user: localService.user.get(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
