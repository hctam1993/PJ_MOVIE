import axios from "axios";
import { baseURL, https, TOKEN_CYBERSOFT } from "./configURL";
import { localService } from "./localService";

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
  register: (data) => {
    const uri = "/api/QuanLyNguoiDung/DangKy";
    return https.post(uri, data);
  },
  getUserList: () => {
    const uri = `/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${
      localService.user.get()?.maNhom
    }`;
    return https.get(uri);
  },
  deleteUser: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  getUserInfoEdit: (taiKhoan) => {
    console.log("taiKhoan: ", taiKhoan);
    return https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  },
};
