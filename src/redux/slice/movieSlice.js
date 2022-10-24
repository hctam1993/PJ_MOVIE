import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { movieService } from "../../services/movieService";

const initialState = {
  dataBanner: [],
  isLoading: false,
  dataListMovie: [],
  dataListMovieDefault: [],
  filmDetailEdit: {},
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
    builder.addCase(getFilmDetailEdit.fulfilled, (state, action) => {
      state.filmDetailEdit = action.payload;
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

export const addFilm = createAsyncThunk("movie/addFilm", async (data) => {
  try {
    const res = await movieService.addFilm(data);
    message.success("Thêm phim thành công");
  } catch (error) {
    console.log("error: ", error.response.data);
  }
});

export const getFilmDetailEdit = createAsyncThunk(
  "movie/getFilmDetailEdit",
  async (maPhim) => {
    try {
      const res = await movieService.getFilmDetailEdit(maPhim);
      // console.log("res", res.data.content);
      return res.data.content;
    } catch (error) {
      console.log("err", error.response.data);
    }
  }
);
export const editFilm = createAsyncThunk("movie/editFilm", async (data) => {
  try {
    const res = await movieService.editFilm(data);
    message.success("Cập nhật phim thành công");
    console.log("res", res.data.content);
  } catch (error) {
    console.log("error: ", error);
  }
});

export const { setPhimDangChieu, setPhimSapChieu } = movieSlice.actions;

export default movieSlice.reducer;
