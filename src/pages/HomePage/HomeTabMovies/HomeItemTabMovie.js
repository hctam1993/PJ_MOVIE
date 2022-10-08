import React, { Fragment } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function HomeItemTabMovie({ data }) {
  return (
    <Fragment>
      <div className="p-3 flex">
        <img className="w-28 object-contain" src={data.hinhAnh} />
        <div className="mx-5">
          <h2 className="ml-2 text-2xl text-green-700 uppercase">
            {data.tenPhim}
          </h2>
          <div className="grid grid-cols-4 gap-2">
            {data.lstLichChieuTheoPhim.slice(0, 9).map((item, index) => {
              return (
                <NavLink to="/" key={index}>
                  <div
                    className="p-3 rounded bg-red-600 text-white text-center hover:bg-red-800 transition"
                    key={item.maLichChieu}
                  >
                    {moment(item.ngayChieuGioChieu).format("DD-MM-YYYY~hh:mm")}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
