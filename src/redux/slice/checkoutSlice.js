import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { checkoutService } from "../../services/checkoutService";

const initialState = {
  danhSachPhongVe: {},
  danhSachGheDangDat: [],
  danhSachGheKhachDat: [],
  tabActive: "1",
};

const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {
    datVe: (state, action) => {
      // console.log(action.payload);
      //cập nhật danh sách ghế đang đặt

      let danhSachGheCapNhat = [...state.danhSachGheDangDat];
      let index = danhSachGheCapNhat.findIndex(
        (gheDD) => gheDD.maGhe === action.payload.maGhe
      );

      if (index != -1) {
        //tìm thấy ghế đã được click
        danhSachGheCapNhat.splice(index, 1);
      } else {
        danhSachGheCapNhat.push(action.payload);
      }

      state.danhSachGheDangDat = danhSachGheCapNhat;
    },
    changeTab: (state, action) => {
      state.tabActive = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(layDanhSachPhongVe.fulfilled, (state, action) => {
      state.danhSachPhongVe = action.payload;
    });
  },
});

export const layDanhSachPhongVe = createAsyncThunk(
  "checkout/layDanhSachPhongVe",
  async (id) => {
    try {
      const res = await checkoutService.layDanhSachPhongVe(id);
      return res.data.content;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);
export const datVeXemPhim = createAsyncThunk(
  "checkout/datVeXemPhim",
  async (thongTinDatVe) => {
    try {
      const res = await checkoutService.datVe(thongTinDatVe);
      message.success("Đặt vé thành công");
      // console.log("res: ", res);
    } catch (error) {
      message.error("Đặt vé thất bại");
      console.log("error: ", error.response.data);
    }
  }
);

export const { datVe, changeTab } = checkoutSlice.actions;

export default checkoutSlice.reducer;
