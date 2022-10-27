import axios from "axios";
import { baseURL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localService } from "./localService";

export const checkoutService = {
  layDanhSachPhongVe: (id) => {
    // return https.get(`/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`);
    return axios({
      baseURL: `${baseURL}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
      method: "GET",
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localService.user.get()?.accessToken,
      },
    });
  },
  datVe: (thongTinDatVe) => {
    // return https.post("/api/QuanLyDatVe/DatVe", thongTinDatVe);
    return axios({
      baseURL: `${baseURL}/api/QuanLyDatVe/DatVe`,
      method: "POST",
      data: thongTinDatVe,
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localService.user.get()?.accessToken,
      },
    });
  },
};
