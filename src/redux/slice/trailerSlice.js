import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  srcURL: "",
};

const trailerSlice = createSlice({
  name: "trailerSlice",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      // console.log("action: ", action);
      state.isOpen = true;
      state.srcURL = action.payload;
    },
    setClose: (state) => {
      state.isOpen = false;
      state.srcURL = "";
    },
  },
});

export const { setOpen, setClose } = trailerSlice.actions;
export default trailerSlice.reducer;
