import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { localService } from "../../services/localService";
import { userService } from "../../services/userService";

const initialState = {
  isLogin: true,
  user: localService.user.get(),
  userInfoEdit: "",
  userList: [],
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.user = action.payload;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoEdit.fulfilled, (state, action) => {
      state.userInfoEdit = action.payload;
    });
  },
});

export const getUserInfoEdit = createAsyncThunk(
  "userSlice/getUserInfoEdit",
  async (taiKhoan) => {
    try {
      const res = await userService.getUserInfoEdit(taiKhoan);
      // console.log(" res: ", res);
      return res.data.content;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);
export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;
