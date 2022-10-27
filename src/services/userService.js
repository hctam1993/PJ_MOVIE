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
    // return https.delete(
    //   `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    // );
    return axios({
      url: `${baseURL}/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
        Authorization: "bearer " + localService.user.get()?.accessToken,
      },
    });
  },
  getUserInfoEdit: (taiKhoan) => {
    // console.log("taiKhoan: ", taiKhoan);
    // return https.post(
    //   `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    // );
    return axios({
      url: `${baseURL}/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`,
      method: "POST",
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
        Authorization: "bearer " + localService.user.get()?.accessToken,
      },
    });
  },
  updateUserInfo: (data) => {
    // return https.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, data);
    return axios({
      url: `${baseURL}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "POST",
      data: data,
      headers: {
        TokenCyberSoft: TOKEN_CYBERSOFT,
        Authorization: "bearer " + localService.user.get()?.accessToken,
      },
    });
  },
  infoListTicket: () => {
    // return https.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan");
    return axios({
      url: `${baseURL}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
      method: "POST",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localService.user.get()?.accessToken,
      },
    });
  },
};
