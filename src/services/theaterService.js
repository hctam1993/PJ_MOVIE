import { httpsGET } from "./configURL";

export const theaterService = {
  getMovieTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    return httpsGET.get(uri);
  },
  getListTheater: (maPhim) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return httpsGET.get(uri);
  },
};
