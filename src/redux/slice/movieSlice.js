import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import { movieService } from "../../services/movieService";

const initialState = {
  dataBanner: [],
  isLoading: false,
  dataListMovie: [],
  dataListMovieClone: [],
  searchFilm: "",
  dataListMovieDefault: [],
  filmDetailEdit: {},
  isDetail: "",
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
    setSearchFilm: (state, action) => {
      state.searchFilm = action.payload;
      state.dataListMovieClone = [...state.dataListMovie].filter((film) => {
        return film.tenPhim.includes(state.searchFilm);
      });
    },
    setIsDetail: (state, action) => {
      // console.log("action: ", action);
      state.isDetail = action.payload;
      // console.log("state.isDetail: ", state.isDetail);
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
      if (state.searchFilm == "") {
        state.dataListMovieClone = [...state.dataListMovie];
      }
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
    message.success("Th??m phim th??nh c??ng");
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
    message.success("C???p nh???t phim th??nh c??ng");
    console.log("res", res.data.content);
  } catch (error) {
    message.error(error.response.data);
    console.log("error: ", error);
  }
});
export const deleteFilm = createAsyncThunk(
  "movie/deleteFilm",
  async (maPhim) => {
    try {
      const res = await movieService.deleteFilm(maPhim);
      message.success("X??a phim th??nh c??ng");
      // console.log("res: ", res.data.content);
    } catch (error) {
      message.error("X??a phim th???t b???i");
      console.log("error: ", error.response.data);
    }
  }
);

export const { setPhimDangChieu, setPhimSapChieu, setSearchFilm, setIsDetail } =
  movieSlice.actions;

export default movieSlice.reducer;
