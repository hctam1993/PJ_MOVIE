import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { localService } from "../../services/localService";
import { NavLink } from "react-router-dom";
import { setIsDetail } from "../../redux/slice/movieSlice";

export default function UserNav() {
  let { user } = useSelector((state) => state.userSlice);

  const dispatch = useDispatch();

  let handleLogout = () => {
    dispatch(setIsDetail(false));
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
            className="border rounded border-red-500 text-red-500 px-2 py-1 lg:px-7 lg:py-2 font-semibold ml-2"
          >
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <div className="items-center flex-shrink-0 flex space-x-2">
          <NavLink to="/login">
            <button className="self-center px-2 py-1 lg:px-7 lg:py-2 font-semibold rounded bg-red-500 hover:bg-red-700 text-white">
              Đăng nhập
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="self-center px-2 py-1 lg:px-7 lg:py-2 font-semibold rounded bg-red-500 hover:bg-red-700 text-white">
              Đăng ký
            </button>
          </NavLink>
        </div>
      );
    }
  };

  return <div className="my-auto">{renderContent()}</div>;
}
