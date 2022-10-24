import { https } from "./configURL";

export const movieService = {
  getListMovie: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05`;
    return https.get(uri);
  },
  getListBanner: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return https.get(uri);
  },
  addFilm: (data) => {
    let url = "/api/QuanLyPhim/ThemPhimUploadHinh";
    return https.post(url, data);
  },
};
