import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { theaterService } from "../../services/theaterService";

const initialState = {
  dataLichChieuTheoRap: [],
  dataLichChieuTheoPhim: [],
};

const theaterSlice = createSlice({
  name: "theaterSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLichChieuTheoRap.fulfilled, (state, action) => {
      state.dataLichChieuTheoRap = action.payload;
    });

    builder.addCase(getLichChieuTheoPhim.fulfilled, (state, action) => {
      state.dataLichChieuTheoPhim = action.payload;
    });
  },
});
export const getLichChieuTheoRap = createAsyncThunk(
  "theater/getLichChieuTheoRap",
  async () => {
    const res = await theaterService.getMovieTheater();
    // console.log("res: ", res);
    return res.data.content;
  }
);
export const getLichChieuTheoPhim = createAsyncThunk(
  "theater/getLichChieuTheoPhim",
  async (id) => {
    const res = await theaterService.getListTheater(id);
    return res.data.content;
  }
);

export default theaterSlice.reducer;
