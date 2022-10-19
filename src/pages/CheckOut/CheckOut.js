import React from "react";
import { useSelector } from "react-redux";
import style from "./CheckOut.module.css";

export default function CheckOut() {
  const { user } = useSelector((state) => state.userSlice);

  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex justify-center mt-5">
            <div className=""></div>
            <div className={`${style["trapezoid"]}`}>Màn hình</div>
          </div>
        </div>
        <div className="col-span-3 min-h-screen">
          <h3 className="text-center text-2xl text-green-400">0 đ</h3>
          <hr />
          <h3 className="text-xl">Lật mặt 48H</h3>
          <p>Địa điểm: BHD Star 3/2</p>
          <p>Ngày chiếu: 25/4/2020</p>
          <hr />
          <div className="flex flex-row my-5">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">0 đ</span>
            </div>
          </div>
          <hr />
          <div className="my-5">
            <i>Email</i>
            <br />
            {user.email}
          </div>
          <hr />
          <div className="my-5">
            <i>Phone</i>
            <br />
            {user.soDT}
          </div>
          <hr />
          <div
            className="mb-0 flex flex-col justify-end items-center"
            style={{ minHeight: "30vh" }}
          >
            <div className="bg-green-500 text-white w-full text-2xl text-center py-3 font-bold">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
