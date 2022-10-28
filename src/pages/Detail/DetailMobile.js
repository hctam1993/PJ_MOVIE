import React, { useEffect, useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/css/CircleRating.css";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getLichChieuTheoPhim } from "../../redux/slice/theaterSlice";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { Rate } from "antd";
import { setIsDetail } from "../../redux/slice/movieSlice";

export default function DetailMobile() {
  const { dataLichChieuTheoPhim, heThongRapChieu } = useSelector(
    (state) => state.theaterSlice
  );

  const navigate = useNavigate();
  let danhGia = 0;
  if (dataLichChieuTheoPhim.danhGia) {
    danhGia = dataLichChieuTheoPhim.danhGia;
  }
  // console.log("danhGia", danhGia);
  // console.log("dataLichChieuTheoPhim: ", dataLichChieuTheoPhim);
  // console.log("heThongRapChieu: ", heThongRapChieu);

  let dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getLichChieuTheoPhim(id));
    dispatch(setIsDetail(true));

    window.scrollTo(0, 0);
  }, []);

  let itemsCumRap = (cumRapChieu) => {
    return cumRapChieu.map((cumRap, index) => {
      // console.log("cumRap: ", cumRap);
      return {
        label: (
          <div className="w-11/12 text-left">
            <p className="text-red-700 stroke-white">{cumRap.tenCumRap}</p>
            <p className="text-green-700">{cumRap.diaChi}</p>
          </div>
        ),
        key: cumRap.maCumRap + index,
        children: cumRap.lichChieuPhim.slice(0, 19).map((lichChieu) => {
          return (
            <button
              key={lichChieu.maLichChieu}
              className="px-3 py-1 bg-red-500 text-white mr-2 mb-2 rounded hover:bg-red-700 transition"
              onClick={() => {
                navigate(`/checkout/${lichChieu.maLichChieu}`);
              }}
              style={{ minWidth: 150 }}
            >
              {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-YYYY hh:mm")}
            </button>
          );
        }),
      };
    });
  };

  let renderHeThongRap = heThongRapChieu.map((heThongRap) => {
    return {
      label: <img className="w-10 h-10" src={heThongRap?.logo} />,
      key: heThongRap?.maHeThongRap,
      children: (
        <Tabs
          tabPosition="top"
          style={{ minHeight: 100, overflowY: "scroll" }}
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
        maxHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150 }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-7 col-start-1">
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
              </div>
            </div>
          </div>
          <div className="col-span-4 col-start-9">
            <div
              className={
                danhGia * 10 > 70
                  ? `c100 p${danhGia * 10} green`
                  : danhGia * 10 < 50
                  ? `c100 p${danhGia * 10} orange`
                  : `c100 p${danhGia * 10}`
              }
            >
              <span>{danhGia * 10}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div className="">
              <Rate
                allowHalf
                value={danhGia / 2}
                disabled
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="">{dataLichChieuTheoPhim?.moTa}</p>
        </div>
        <div className="container mx-auto mt-10 bg-white px-2 rounded-lg">
          <Tabs tabPosition={"top"} items={renderHeThongRap} />
        </div>
      </CustomCard>
    </div>
  );
}
