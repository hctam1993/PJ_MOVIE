import React from "react";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
const { Meta } = Card;

export default function ItemMovies({ data }) {
  // console.log("data: ", data);
  return (
    <Card
      hoverable
      style={{ width: "100%" }}
      cover={
        <img
          alt="example"
          src={data.hinhAnh}
          className="h-80 w-full object-cover"
        />
      }
    >
      <Meta
        title={<p className="text-red-600 text-center">{data.tenPhim}</p>}
        description={<p className="truncate">{data.moTa}</p>}
      />
      <NavLink to={`/detail/${data.maPhim}`}>
        <button
          className="w-full py-2 text-center bg-red-600 text-white mt-5 rounded transition
   duration-300 hover:bg-black"
        >
          Xem chi tiết
        </button>
      </NavLink>
      {/* {children} */}
    </Card>
  );
}
