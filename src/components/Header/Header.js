import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";

export default function Header() {
  const navLinkClass = ({ isActive }) => {
    return isActive
      ? "flex items-center px-4 -mb-1 text-black font-bold border-b-2 border-black"
      : "flex items-center px-4 -mb-1 text-black hover:text-red-500";
  };
  return (
    <header className="bg-white fixed w-full z-10">
      <div className=" flex justify-between h-16 mx-auto w-11/12">
        <NavLink to="/">
          <img
            src="http://demo1.cybersoft.edu.vn/logo.png"
            className="h-full p-1"
          />
        </NavLink>

        <ul className="items-stretch hidden space-x-3 lg:flex m-0 h-4/5">
          <li className="flex">
            <NavLink to="/" className={navLinkClass}>
              <span className="hover:text-red-500">Trang chủ</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/news" className={navLinkClass}>
              <span>Tin mới</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/contact" className={navLinkClass}>
              <span className="hover:text-red-500">Liên hệ</span>
            </NavLink>
          </li>
        </ul>
        <UserNav />
      </div>
    </header>
  );
}
