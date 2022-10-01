import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderDestop() {
  const navLinkClass = ({ isActive }) => {
    return isActive
      ? "flex items-center px-4 -mb-1 text-white border-b-2 border-white"
      : "flex items-center px-4 -mb-1 text-white";
  };
  return (
    <header className="bg-gray-800 dark:text-gray-100 bg-opacity-90 fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto xl:px-4">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center"
        >
          <img
            src="http://demo1.cybersoft.edu.vn/logo.png"
            className="h-full"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex m-0 h-4/5">
          <li className="flex">
            <NavLink to="/" className={navLinkClass}>
              <span>Trang chủ</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/news" className={navLinkClass}>
              <span>Tin mới</span>
            </NavLink>
          </li>
          <li className="flex">
            <NavLink to="/contact" className={navLinkClass}>
              <span>Liên hệ</span>
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex space-x-2">
          <NavLink to="/login">
            {" "}
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Đăng nhập
            </button>
          </NavLink>
          <NavLink to="/register">
            {" "}
            <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
              Đăng ký
            </button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
