import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "../../services/movieService";

const initialState = {
  dataBanner: [],
  dataListMovie: [],
  dataLichChieuTheoRap: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDataBanner.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.dataBanner = action.payload;
    });
    builder.addCase(getDataListMovie.fulfilled, (state, action) => {
      state.dataListMovie = action.payload;
      // console.log("action.payload: ", action.payload);
    });
    builder.addCase(getLichChieuTheoRap.fulfilled, (state, action) => {
      state.dataLichChieuTheoRap = action.payload;
    });
  },
});

export const getDataBanner = createAsyncThunk(
  "movie/getDataBanner",
  async () => {
    const res = await movieService.getListBanner();
    // console.log("res: ", res);
    return res.data.content;
  }
);

export const getDataListMovie = createAsyncThunk(
  "movie/getDataListMovie",
  async () => {
    const res = await movieService.getListMovie();
    return res.data.content;
  }
);

export const getLichChieuTheoRap = createAsyncThunk(
  "movie/getLichChieuTheoRap",
  async () => {
    const res = await movieService.getMovieTheater();
    // console.log("res: ", res);
    return res.data.content;
  }
);

// export const { setDataBanner } = movieSlice.actions;

export default movieSlice.reducer;
