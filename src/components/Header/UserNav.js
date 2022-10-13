import React from "react";
import { useSelector } from "react-redux";
import { localService } from "../../services/localService";
import { NavLink } from "react-router-dom";

export default function UserNav() {
  let { user } = useSelector((state) => state.userSlice);

  let handleLogout = () => {
    localService.user.remove();
    window.location.href = "/";
  };

  let renderContent = () => {
    if (user) {
      return (
        <>
          <span className="text-amber-500">{user.hoTen}</span>
          <button
            onClick={handleLogout}
            className="border rounded border-red-500  text-red-500 px-7 py-2 font-semibold ml-2"
          >
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <div className="items-center flex-shrink-0 hidden lg:flex space-x-2">
          <NavLink to="/login">
            {" "}
            <button className="self-center px-7 py-2 font-semibold rounded bg-red-500 hover:bg-red-700 text-white">
              Đăng nhập
            </button>
          </NavLink>
          <NavLink to="/register">
            {" "}
            <button className="self-center px-7 py-2 font-semibold rounded bg-red-500 hover:bg-red-700 text-white">
              Đăng ký
            </button>
          </NavLink>
        </div>
      );
    }
  };

  return <div className="my-auto">{renderContent()}</div>;
}
