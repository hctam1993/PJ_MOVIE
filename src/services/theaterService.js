import { https } from "./configURL";

export const theaterService = {
  getMovieTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    return https.get(uri);
  },
  getListTheater: (maPhim) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return https.get(uri);
  },
};
