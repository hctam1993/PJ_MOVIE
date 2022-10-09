import { httpsGET } from "./configURL";

export const movieService = {
  getListMovie: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP05`;
    return httpsGET.get(uri);
  },
  getListBanner: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return httpsGET.get(uri);
  },
};
