import { https } from "./configURL";

export const theaterService = {
  getMovieTheater: () => {
    let uri = "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP05";
    return https.get(uri);
  },
  getListTheaterByID: (maPhim) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return https.get(uri);
  },
  getListTheater: () => {
    let url = `/api/QuanLyRap/LayThongTinHeThongRap`;
    return https.get(url);
  },
  getInfoTheaterByID: (maHeThongRap) => {
    let url = `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
    return https.get(url);
  },
  addLichChieu: (data) => {
    let url = `/api/QuanLyDatVe/TaoLichChieu`;
    return https.post(url, data);
  },
};
