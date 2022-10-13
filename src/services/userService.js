import axios from "axios";
import { baseURL, https, TOKEN_CYBERSOFT } from "./configURL";

export const userService = {
  postLogin: (dataLogin) => {
    return axios({
      url: `${baseURL}/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: dataLogin,
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
      },
    });
  },
  // register: (data) => {
  //   return axios({
  //     url: `${baseURL}/api/QuanLyNguoiDung/DangKy`,
  //     method: "POST",
  //     data: data,
  //     headers: {
  //       TokenCyberSoft: TOKEN_CYBERSOFT,
  //     },
  //   });
  // },
  register: (data) => {
    const uri = "/api/QuanLyNguoiDung/DangKy";
    return https.post(uri, data);
  },
};
