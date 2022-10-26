import React, { Fragment } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function HomeItemTabMovie({ data }) {
  return (
    <Fragment>
      <div className="md:p-3 pt-2 flex">
        <img
          className="xl:w-28 md:w-20 object-contain hidden md:block"
          src={data.hinhAnh}
        />
        <div className="md:mx-5">
          <h2 className="ml-2 xl:text-2xl md:text-xl text-sm text-green-700 uppercase">
            {data.tenPhim}
          </h2>
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
            {data.lstLichChieuTheoPhim.slice(0, 9).map((item, index) => {
              // console.log("item: ", item);
              return (
                <NavLink to={`/checkout/${item.maLichChieu}`} key={index}>
                  <div
                    className="md:p-3 p-1 rounded bg-red-600 text-white text-center hover:bg-red-800 transition"
                    key={item.maLichChieu}
                  >
                    {moment(item.ngayChieuGioChieu).format("DD-MM-YYYY~hh:mm")}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
        <br />
      </div>
    </Fragment>
  );
}
