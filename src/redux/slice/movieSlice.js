import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataBanner: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    },
    {
      maBanner: 2,
      maPhim: 1283,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png",
    },
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png",
    },
  ],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {},
});

export default movieSlice.reducer;
