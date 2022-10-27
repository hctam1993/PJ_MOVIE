import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function Header() {
  const navLinkClass = ({ isActive }) => {
    return isActive
      ? "text-black font-bold border-b-2 border-black"
      : "text-black hover:text-red-500";
  };
  return (
    <header className="bg-white fixed w-full z-10">
      <div className=" flex justify-between h-16 mx-auto w-11/12 ">
        <NavLink to="/">
          <img
            src="http://demo1.cybersoft.edu.vn/logo.png"
            className="h-full p-1"
          />
        </NavLink>

        <ul className=" self-center hidden space-x-8 lg:flex m-0 h-4/5 items-center justify-center">
          <li className="flex">
            <a
              href="#"
              className="hover:text-red-500 text-black text-xl focus:text-red-500 focus:font-bold"
            >
              Trang chủ
            </a>
          </li>
          <li className="flex">
            <a
              href="#lichChieu"
              className="hover:text-red-500 text-black text-xl focus:text-red-500 focus:font-bold"
            >
              Lịch chiếu
            </a>
          </li>
          <li className="flex">
            <a
              href="#cumRap"
              className="hover:text-red-500 text-black text-xl focus:text-red-500 focus:font-bold"
            >
              Cụm rạp
            </a>
          </li>
        </ul>
        <UserNav />
      </div>
    </header>
  );
}
