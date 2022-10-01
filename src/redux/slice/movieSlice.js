import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataBanner: [],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    setDataBanner: (state, action) => {
      state.dataBanner = action.payload;
    },
  },
});

export const { setDataBanner } = movieSlice.actions;

export default movieSlice.reducer;
