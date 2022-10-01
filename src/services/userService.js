import axios from "axios";
import { baseURL, TOKEN_CYBERSOFT } from "./configURL";

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
};
