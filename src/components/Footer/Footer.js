import React from "react";
import { useSelector } from "react-redux";

export default function Footer() {
  const { dataLichChieuTheoRap } = useSelector((state) => state.theaterSlice);

  // console.log("dataLichChieuTheoRap: ", dataLichChieuTheoRap);
  let arrHethongRap = dataLichChieuTheoRap.reduce((arr, curtValue) => {
    return [
      ...arr,
      {
        maHeThongRap: curtValue.maHeThongRap,
        logo: curtValue.logo,
      },
    ];
  }, []);
  let renderDoiTac = () => {
    return arrHethongRap.map((rap, index) => {
      return (
        <div
          key={index}
          className="opacity-80 hover:opacity-100 cursor-pointer"
        >
          <img src={rap.logo} className="w-10 h-10 object-cover" />
        </div>
      );
    });
  };
  return (
    <footer
      className="text-white body-font"
      style={{ backgroundColor: "#212121" }}
    >
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 m-auto text-center md:text-left items-center">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="http://demo1.cybersoft.edu.vn/logo.png" />
          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              ĐỐI TÁC
            </h2>
            <div className="grid grid-cols-2 gap-4">{renderDoiTac()}</div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CYBERSOFT MOVIE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">Giới thiệu</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Tiện ích online
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Quà tặng</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Tuyển dụng</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              ĐIỀU KHOẢN SỬ DỤNG
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">
                  Điều khoản chung
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Điều khoản giao dịch
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Chính sách thanh toán
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CHĂM SÓC KHÁCH HÀNG
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">
                  Hotline: 1900 1560
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Email hỗ trợ: cybersoft@gmail.com
                </a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">
                  Câu hỏi thường gặp
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center">
          <p className="text-gray-500 text-sm text-center sm:text-left mb-0">
            © 2022 Hà Chí Tâm
            <a
              href="https://github.com/hctam1993"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @hctam1993
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
