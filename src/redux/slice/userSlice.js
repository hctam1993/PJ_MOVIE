import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { localService } from "../../services/localService";
import { userService } from "../../services/userService";

const initialState = {
  isLogin: true,
  user: localService.user.get(),
  userInfoEdit: "",
  userList: [],
  search: "",
  userListClone: [],
  thongTinNguoiDung: {},
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
      if (state.search == "") {
        state.userListClone = [...state.userList];
      }
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.userListClone = [...state.userList].filter((user) => {
        return user.taiKhoan.includes(state.search);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserInfoEdit.fulfilled, (state, action) => {
      state.userInfoEdit = action.payload;
    });
    builder.addCase(infoListTicket.fulfilled, (state, action) => {
      state.thongTinNguoiDung = action.payload;
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
export const infoListTicket = createAsyncThunk(
  "userSlice/infoListTicket",
  async () => {
    try {
      const res = await userService.infoListTicket();
      return res.data.content;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);
export const { setUserInfo, setSearch, setUserList } = userSlice.actions;

export default userSlice.reducer;
