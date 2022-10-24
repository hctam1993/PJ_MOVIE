import axios from "axios";
import { baseURL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localService } from "./localService";

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
  getFilmDetailEdit: (maPhim) => {
    let url = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    return https.get(url);
  },
  editFilm: (data) => {
    // let url = `/api/QuanLyPhim/CapNhatPhimUpload`;
    // return https.post(url, data);
    return axios({
      url: `${baseURL}/api/QuanLyPhim/CapNhatPhimUpload`,
      method: "POST",
      data: data,
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
        Authorization: "bearer " + localService.user.get()?.accessToken,
      },
    });
  },
};
