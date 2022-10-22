import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  datVe,
  datVeXemPhim,
  layDanhSachPhongVe,
} from "../../redux/slice/checkoutSlice";
import "../../assets/css/CheckOut.css";
import { CheckOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import { message } from "antd";
import "lodash";
import _ from "lodash";

export default function CheckOut() {
  const { user } = useSelector((state) => state.userSlice);
  // console.log("user: ", user);
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
      // console.log("ghe: ", ghe);
      let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      let classGheDD = "";
      //KT từng ghế render
      let indexGheDD = danhSachGheDangDat.findIndex(
        (gheDD) => gheDD.maGhe === ghe.maGhe
      );
      if (indexGheDD != -1) {
        classGheDD = "gheDangDat";
      }

      //ghe chính mình đặt
      let classGheDaDuocDat = "";
      if (user.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }
      return (
        <Fragment key={index}>
          <button
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDD} ${classGheDaDuocDat} text-center`}
            disabled={ghe.daDat}
            onClick={() => {
              dispatch(datVe(ghe));
            }}
          >
            {ghe.daDat ? (
              classGheDaDuocDat != "" ? (
                <UserOutlined className="font-bold" />
              ) : (
                <CloseOutlined className="mb-1 font-bold" />
              )
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  const renderGheDD = () => {
    return _.sortBy(danhSachGheDangDat, ["stt"]).map((ghe, index) => {
      return (
        <span key={index} className="text-green-500 text-xl">
          {" "}
          {ghe.stt}
        </span>
      );
    });
  };
  const tongTien = danhSachGheDangDat
    .reduce((tongTien, ghe, index) => {
      return (tongTien += ghe.giaVe);
    }, 0)
    .toLocaleString();

  return (
    <div className="min-h-screen mt-5">
      <div className="grid grid-cols-12">
        <div className="col-span-9">
          <div className="flex flex-col items-center mt-5">
            <div className="trapezoid">Màn hình</div>
            <div>{renderSeats()}</div>
          </div>
          <div className="mt-5 flex justify-center">
            <table className="max-w-full divide-y divide-gray-200 w-4/5">
              <thead className="bg-gray-50 p-5">
                <tr>
                  <th>Ghế chưa đặt</th>
                  <th>Ghế đang đặt</th>
                  <th>Ghế VIP</th>
                  <th>Ghế đã đặt</th>
                  <th>Ghế mình đặt</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="text-center">
                    <button className="ghe text-center">
                      <CheckOutlined className="mb-2 font-bold" />
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheDangDat text-center">
                      <CheckOutlined className="mb-2 font-bold" />
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheVip text-center">
                      <CheckOutlined className="mb-2 font-bold" />
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheDaDat text-center">
                      <CheckOutlined className="mb-2 font-bold" />
                    </button>
                  </td>
                  <td className="text-center">
                    <button className="ghe gheDaDuocDat text-center">
                      <CheckOutlined className="mb-2 font-bold" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3 max-h-full box__tinhTien">
          <h3 className="text-center text-2xl text-green-400 px-3">0 đ</h3>
          <hr />
          <h3 className="text-2xl font-bold px-3">{thongTinPhim?.tenPhim}</h3>
          <p className="px-3">
            Địa chỉ: {thongTinPhim?.tenCumRap} - {thongTinPhim?.tenRap}
          </p>
          <p className="px-3">
            Ngày chiếu: {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div className="flex flex-row my-5 items-center pl-3">
            <div className="w-3/4">
              <span className="text-red-400 text-lg pr-3">Ghế:</span>
              {renderGheDD()}
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">{tongTien} đ</span>
            </div>
          </div>
          <hr />
          <div className="my-5 px-3">
            <i>Email</i>
            <br />
            {user.email}
          </div>
          <hr />
          <div className="my-5 px-3">
            <i>Phone</i>
            <br />
            {user.soDT}
          </div>
          <hr />
          <div className="mt-10 w-11/12 mx-auto">
            <div
              className="bg-green-500 text-white w-full text-2xl text-center py-3 font-bold cursor-pointer"
              onClick={() => {
                const thongTinDatVe = {
                  maLichChieu: id,
                  danhSachVe: danhSachGheDangDat,
                };
                // console.log("thongTinDatVe: ", thongTinDatVe);
                dispatch(datVeXemPhim(thongTinDatVe))
                  .then((res) => {
                    message.success("Đặt vé thành công");
                  })
                  .catch((err) => {
                    message.error(err.response?.data);
                  });
                dispatch(layDanhSachPhongVe(id));
              }}
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
