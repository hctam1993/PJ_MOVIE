import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { checkoutService } from "../../services/checkoutService";

const initialState = {
  danhSachPhongVe: {},
};

const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState,
  reducers: {},
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

export default checkoutSlice.reducer;
