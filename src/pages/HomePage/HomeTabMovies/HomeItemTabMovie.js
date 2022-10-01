import React from "react";
import moment from "moment";

export default function HomeItemTabMovie({ data }) {
  return (
    <div className="p-3 flex">
      <img className="w-28 object-contain" src={data.hinhAnh} />
      <div className="mx-5">
        <p>{data.tenPhim}</p>
        <div className="grid grid-cols-4 gap-5">
          {data.lstLichChieuTheoPhim.slice(0, 9).map((item) => {
            return (
              <div
                className="p-3 rounded bg-red-600 text-white text-center"
                key={item.maLichChieu}
              >
                {moment(item.ngayChieuGioChieu).format("DD-MM-YYYY~hh:mm")}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
