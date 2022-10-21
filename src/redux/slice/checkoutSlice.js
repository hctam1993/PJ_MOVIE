import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkoutService } from "../../services/checkoutService";

const initialState = {
  danhSachPhongVe: {},
  danhSachGheDangDat: [],
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

export const { datVe } = checkoutSlice.actions;

export default checkoutSlice.reducer;
