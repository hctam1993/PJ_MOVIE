import { StarTwoTone } from "@ant-design/icons";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movieService } from "../../services/movieService";

const initialState = {
  dataBanner: [],
  isLoading: false,
  dataListMovie: [],
  dataListMovieDefault: [],
  dataLichChieuTheoRap: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    setPhimDangChieu: (state) => {
      // console.log("action: ", action);
      state.dataListMovie = state.dataListMovieDefault.filter(
        (item) => item.dangChieu
      );
    },
    setPhimSapChieu: (state) => {
      // console.log("action: ", action);
      state.dataListMovie = state.dataListMovieDefault.filter(
        (item) => item.sapChieu
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDataBanner.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDataBanner.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.dataBanner = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getDataListMovie.fulfilled, (state, action) => {
      state.dataListMovie = action.payload;
      state.dataListMovieDefault = state.dataListMovie;
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

export const { setPhimDangChieu, setPhimSapChieu } = movieSlice.actions;

export default movieSlice.reducer;
