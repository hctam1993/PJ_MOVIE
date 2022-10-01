import { https } from "./configURL";

export const movieService = {
  getListMovie: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05`;
    return https.get(uri);
  },
  getMovieTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    return https.get(uri);
  },
};
