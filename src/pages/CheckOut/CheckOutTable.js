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
import { Tabs } from "antd";
import { infoListTicket } from "../../redux/slice/userSlice";

function CheckOut() {
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
function KetQuaDatVe(...props) {
  const { thongTinNguoiDung } = useSelector((state) => state.userSlice);
  console.log("thongTinNguoiDung", thongTinNguoiDung);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("1111111111111");
    dispatch(infoListTicket());
  }, []);
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
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://picsum.photos/100/100"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Holden Caulfield
                </h2>
                <p className="text-gray-500">UI Designer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/84x84"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Henry Letham
                </h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/88x88"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Oskar Blinde
                </h2>
                <p className="text-gray-500">Founder</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/90x90"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  John Doe
                </h2>
                <p className="text-gray-500">DevOps</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/94x94"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Martin Eden
                </h2>
                <p className="text-gray-500">Software Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/98x98"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Boris Kitua
                </h2>
                <p className="text-gray-500">UX Researcher</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/100x90"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Atticus Finch
                </h2>
                <p className="text-gray-500">QA Engineer</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/104x94"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Alper Kamu
                </h2>
                <p className="text-gray-500">System</p>
              </div>
            </div>
          </div>
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt="team"
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src="https://dummyimage.com/108x98"
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">
                  Rodrigo Monchi
                </h2>
                <p className="text-gray-500">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const CheckOutTable = () => {
  const items = [
    {
      label: "01 CHỌN GHẾ & THANH TOÁN",
      key: "item-1",
      children: <CheckOut />,
    },
    // { label: "02 KẾT QUẢ ĐẶT VÉ", key: "item-2", children: <KetQuaDatVe /> },
  ];
  return (
    <div className="">
      <Tabs animated items={items} className="" />
    </div>
  );
};
export default CheckOutTable;
