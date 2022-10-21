import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { datVe, layDanhSachPhongVe } from "../../redux/slice/checkoutSlice";
import "../../assets/css/CheckOut.css";
import { CloseOutlined } from "@ant-design/icons";

export default function CheckOut() {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(layDanhSachPhongVe(id));
  }, []);

  const { danhSachPhongVe, danhSachGheDangDat } = useSelector(
    (state) => state.checkoutSlice
  );
  // console.log("danhSachPhongVe: ", danhSachPhongVe);

  const { thongTinPhim, danhSachGhe } = danhSachPhongVe;

  const renderSeats = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";

      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      return (
        <Fragment key={index}>
          <button
            className={`ghe ${classGheVip} ${classGheDaDat} text-center`}
            disabled={ghe.daDat}
            onClick={() => {
              dispatch(datVe(ghe));
            }}
          >
            {ghe.daDat ? <CloseOutlined className="mb-1" /> : ghe.stt}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div className="trapezoid">Màn hình</div>
            <div>{renderSeats()}</div>
          </div>
        </div>
        <div className="col-span-3 max-h-full">
          <h3 className="text-center text-2xl text-green-400">0 đ</h3>
          <hr />
          <h3 className="text-2xl font-bold">{thongTinPhim?.tenPhim}</h3>
          <p>
            Địa chỉ: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p>
            Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </p>
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
          <div className="mt-10 w-11/12 mx-auto">
            <div className="bg-green-500 text-white w-full text-2xl text-center py-3 font-bold cursor-pointer">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
