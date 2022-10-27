import { message } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import { userService } from "../../../services/userService";

export default function UserAction({ taiKhoan, onSuccess }) {
  let handleDeleteUser = () => {
    userService
      .deleteUser(taiKhoan)
      .then((res) => {
        console.log(res);
        message.success("Xóa thành công!");
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data);
      });
  };

  return (
    <div className="space-x-2">
      <button
        className="px-5 py-2 rounded bg-red-500 text-white"
        onClick={handleDeleteUser}
      >
        Xóa
      </button>
      <NavLink to={`/management/user/edit/${taiKhoan}`}>
        <button className="px-5 py-2 rounded bg-blue-500 text-white">
          Sửa
        </button>
      </NavLink>
    </div>
  );
}
