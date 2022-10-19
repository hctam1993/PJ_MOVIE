import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/css/CircleRating.css";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getLichChieuTheoPhim } from "../../redux/slice/theaterSlice";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";
import { Rate } from "antd";

export default function Detail() {
  const { dataLichChieuTheoPhim, heThongRapChieu } = useSelector(
    (state) => state.theaterSlice
  );

  // console.log("dataLichChieuTheoPhim: ", dataLichChieuTheoPhim);
  // console.log("heThongRapChieu: ", heThongRapChieu);

  let dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getLichChieuTheoPhim(id));

    window.scrollTo(0, 0);
  }, []);

  let itemsCumRap = (cumRapChieu) => {
    return cumRapChieu.map((cumRap, index) => {
      // console.log("cumRap: ", cumRap);
      return {
        label: (
          <div className="w-48 text-left">
            <p className="text-red-700 truncate stroke-white">
              {cumRap.tenCumRap}
            </p>
            <p className="text-green-700 truncate">{cumRap.diaChi}</p>
          </div>
        ),
        key: cumRap.maCumRap + index,
        children: cumRap.lichChieuPhim.slice(0, 19).map((lichChieu) => {
          return (
            <NavLink to="/" key={lichChieu.maLichChieu}>
              <button
                className="px-5 py-2 bg-red-500 text-white mr-2 mb-2 rounded hover:bg-red-700 transition"
                style={{ minWidth: 150 }}
              >
                {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY h:mm")}
              </button>
            </NavLink>
          );
        }),
      };
    });
  };

  let renderHeThongRap = heThongRapChieu.map((heThongRap) => {
    return {
      label: <img className="w-16 h-16" src={heThongRap?.logo} />,
      key: heThongRap?.maHeThongRap,
      children: (
        <Tabs
          tabPosition="left"
          style={{ maxHeight: 500, overflowY: "scroll" }}
          className="h-48 scrollbar scrollbar-thumb-green-600 scrollbar-track-green-300 overflow-y-scroll hover:scrollbar-thumb-red-500"
          items={itemsCumRap(heThongRap?.cumRapChieu)}
        ></Tabs>
      ),
    };
  });

  return (
    <div
      style={{
        backgroundImage: `url(${dataLichChieuTheoPhim?.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-2">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img
                  src={dataLichChieuTheoPhim?.hinhAnh}
                  alt={dataLichChieuTheoPhim?.biDanh}
                />
              </div>
              <div className="ml-5 col-span-2">
                <p className="">
                  {moment(dataLichChieuTheoPhim?.ngayKhoiChieu).format(
                    "DD-MM-YYYY"
                  )}
                </p>
                <p className="text-4xl mb-4">
                  {dataLichChieuTheoPhim?.tenPhim}
                </p>
                <p className="">{dataLichChieuTheoPhim?.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 col-start-8">
            <div
              className={
                dataLichChieuTheoPhim?.danhGia * 10 > 70
                  ? `c100 p${dataLichChieuTheoPhim?.danhGia * 10} green big`
                  : dataLichChieuTheoPhim?.danhGia * 10 < 50
                  ? `c100 p${dataLichChieuTheoPhim?.danhGia * 10} orange big`
                  : `c100 p${dataLichChieuTheoPhim?.danhGia * 10} big`
              }
            >
              <span>{dataLichChieuTheoPhim?.danhGia * 10}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
              <div className="" style={{ marginLeft: "24%" }}>
                <Rate
                  allowHalf
                  value={dataLichChieuTheoPhim?.danhGia / 2}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 pl-20">
          <Tabs tabPosition={"left"} items={renderHeThongRap} />
        </div>
      </CustomCard>
    </div>
  );
}
