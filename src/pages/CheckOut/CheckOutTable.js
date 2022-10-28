import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  changeTab,
  datVe,
  datVeXemPhim,
  layDanhSachPhongVe,
} from "../../redux/slice/checkoutSlice";
import "../../assets/css/CheckOut.css";
import { CheckOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import { message } from "antd";
import "lodash";
import _ from "lodash";
import { Tabs } from "antd";
import { infoListTicket } from "../../redux/slice/userSlice";
import moment from "moment";
import Header from "../../components/Header/Header";

function CheckOut() {
  const { user } = useSelector((state) => state.userSlice);
  // console.log("user: ", user);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(layDanhSachPhongVe(id));
  }, []);

  const { danhSachPhongVe, danhSachGheDangDat, danhSachGheKhachDat } =
    useSelector((state) => state.checkoutSlice);
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
      //kiểm tra ghế khách đặt
      let classGheKhachDat = "";
      let indexGheKhachDat = danhSachGheKhachDat.findIndex(
        (gheKhachDat) => gheKhachDat.maGhe == ghe.maGhe
      );
      if (indexGheKhachDat != -1) {
        classGheKhachDat = "gheKhachDat";
      }

      //ghe chính mình đặt
      let classGheDaDuocDat = "";
      if (user.taiKhoan === ghe.taiKhoanNguoiDat) {
        classGheDaDuocDat = "gheDaDuocDat";
      }
      return (
        <Fragment key={index}>
          <button
            className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDD} ${classGheDaDuocDat} ${classGheKhachDat} text-center`}
            disabled={ghe.daDat || classGheKhachDat !== ""}
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
        <span key={index} className="text-green-500 text-md">
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
  const paddingDatVe = {
    padding: "16px 8px",
  };
  return (
    <div className="mt-10">
      <div className="grid grid-cols-12 bg-white">
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
                  <th>Ghế khách đang đặt</th>
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
                  <td className="text-center">
                    <button className="ghe gheKhachDangDat text-center">
                      <CheckOutlined className="mb-2 font-bold" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-span-3 flex-grow basis-1/3 ">
          <div className="w-full" style={{ boxShadow: "0 0 5px grey" }}>
            <div style={paddingDatVe}>
              <p className="text-green-500 text-2xl text-center">
                {tongTien}VND
              </p>
            </div>
            <hr className="bg-gray-400 mx-4" style={{ height: 1 }} />
            <div className="flex justify-between" style={paddingDatVe}>
              <h3 className="text-md">Tên phim:</h3>
              <h3 className="text-md font-bold text-red-500">
                {thongTinPhim?.tenPhim}
              </h3>
            </div>
            <hr className="bg-gray-400 mx-4" style={{ height: 1 }} />
            <div className="flex justify-between" style={paddingDatVe}>
              <h3 className="text-md">Cụm rạp:</h3>
              <h3 className="text-md text-green-600">
                {thongTinPhim?.tenCumRap}-{thongTinPhim?.tenRap}
              </h3>
            </div>
            <hr className="bg-gray-400 mx-4" style={{ height: 1 }} />
            <div className="flex justify-between" style={paddingDatVe}>
              <h3 className="text-md">Địa chỉ:</h3>
              <h3 className="text-md  text-green-600">
                {thongTinPhim?.diaChi}
              </h3>
            </div>
            <hr className="bg-gray-400 mx-4" style={{ height: 1 }} />
            <div className="flex justify-between" style={paddingDatVe}>
              <h3 className="text-md">Ngày giờ chiếu:</h3>
              <h3 className="text-md  text-green-600">
                {thongTinPhim?.ngayChieu} - {thongTinPhim?.gioChieu}
              </h3>
            </div>
            <hr className="bg-gray-400 mx-4" style={{ height: 1 }} />
            <div className="flex justify-between" style={paddingDatVe}>
              <h3 className="text-md">Ghế:</h3>
              <div>{renderGheDD()}</div>
            </div>
            <hr className="bg-gray-400 mx-4" style={{ height: 1 }} />
            <button
              className="text-white w-full bg-red-500 hover:bg-red-700 text-2xl mt-6 rounded p-2"
              onClick={() => {
                const thongTinDatVe = {
                  maLichChieu: id,
                  danhSachVe: danhSachGheDangDat,
                };
                // console.log("thongTinDatVe: ", thongTinDatVe);
                dispatch(datVeXemPhim(thongTinDatVe));

                dispatch(layDanhSachPhongVe(id));
              }}
            >
              <span
                className="font-medium tracking-wide"
                style={{ lineHeight: 1.75 }}
              >
                ĐẶT VÉ
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
function KetQuaDatVe(...props) {
  const { thongTinNguoiDung } = useSelector((state) => state.userSlice);
  const thongTinDatVe = thongTinNguoiDung?.thongTinDatVe;

  let thongTinDatVeReverse = thongTinDatVe?.slice().reverse();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(infoListTicket());
  }, []);

  const renderVeDatDat = () => {
    if (!thongTinDatVe) {
      return (
        <div className="container">
          <h1 className="text-4xl uppercase text-center mx-auto">
            Không load được thông tin đặt vé
          </h1>
        </div>
      );
    }
    return thongTinDatVeReverse.map((item, index) => {
      // console.log("item: ", item);
      return (
        <div
          key={index + item.maVe.toString()}
          className="p-2 lg:w-1/3 md:w-1/2 w-full"
        >
          <div className="h-full flex items-start border-gray-200 border p-4 rounded-lg">
            <img
              alt="team"
              className="w-1/5 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
              src={item.hinhAnh}
            />
            <div className="flex-grow">
              <h2 className="text-red-700 text-lg font-bold">{item.tenPhim}</h2>
              <p className="text-gray-500">
                <span className="font-bold">Ngày đặt: </span>
                {moment(item.ngayDat).format("DD/MM/YYYY - hh:mm:ss")}
              </p>
              <p>
                <span className="font-bold">Địa điểm: </span>
                {item.danhSachGhe[0].tenHeThongRap}
              </p>
              <div>
                <span>{item.danhSachGhe[0].tenRap} - </span>
                Ghế:{" "}
                {item.danhSachGhe?.map((ghe, index) => {
                  // console.log(ghe);
                  return (
                    <span className="text-green-500" key={index}>
                      {" "}
                      [ {ghe.tenGhe} ]
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-900">
            LỊCH SỬ ĐẶT VÉ KHÁCH HÀNG
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Xem thông tin phim và địa điểm rạp chiếu, lịch sử vé phim bạn đã ủng
            hộ chúng tôi.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">{renderVeDatDat()}</div>
      </div>
    </section>
  );
}
const CheckOutTable = () => {
  const { tabActive } = useSelector((state) => state.checkoutSlice);
  console.log("tabActive", tabActive);
  const items = [
    {
      label: "01 CHỌN GHẾ & THANH TOÁN",
      key: "1",
      children: <CheckOut />,
    },
    { label: "02 KẾT QUẢ ĐẶT VÉ", key: "2", children: <KetQuaDatVe /> },
  ];
  const dispatch = useDispatch();
  return (
    <div className="">
      <Header />
      <div className="mx-2 pt-16">
        <Tabs
          animated
          items={items}
          className="mt-40"
          defaultActiveKey="1"
          activeKey={tabActive}
          onChange={(key) => {
            dispatch(changeTab(key));
          }}
        />
      </div>
    </div>
  );
};
export default CheckOutTable;
