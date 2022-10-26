import React, { useEffect } from "react";
import { Tabs } from "antd";
import HomeItemTabMovie from "./HomeItemTabMovie";
import { useDispatch, useSelector } from "react-redux";
import { getLichChieuTheoRap } from "../../../redux/slice/theaterSlice";
import "../../../assets/css/TabHome.css";

export default function HomeTabMovieMobile() {
  let { dataLichChieuTheoRap } = useSelector((state) => state.theaterSlice);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLichChieuTheoRap());
  }, []);

  let itemsListCumRap = (heThongRap) => {
    return heThongRap.lstCumRap.map((cumRap, index) => {
      return {
        label: (
          <div className="w-32 text-left">
            <p style={{ marginBottom: 0 }} className="text-red-700 truncate">
              {cumRap.tenCumRap}
            </p>
            <p style={{ marginBottom: 0 }} className="text-green-700 truncate">
              {cumRap.diaChi}
            </p>
          </div>
        ),
        key: cumRap.maCumRap + index,
        children: (
          <div style={{ height: 300, overflowY: "scroll" }} className="h-32 ">
            {cumRap.danhSachPhim.map((phim, index) => {
              return <HomeItemTabMovie data={phim} key={phim.maPhim + index} />;
            })}
          </div>
        ),
      };
    });
  };

  let items = dataLichChieuTheoRap.map((heThongRap, index) => {
    return {
      label: <img className="w-8 h-8" src={heThongRap.logo} />,
      key: heThongRap.maHeThongRap + index,
      children: (
        <Tabs
          tabPosition="left"
          style={{ height: 300 }}
          items={itemsListCumRap(heThongRap)}
        ></Tabs>
      ),
    };
  });

  return (
    <div className="w-11/12 mx-auto bg-gray-200">
      <Tabs
        style={{ height: 300 }}
        defaultActiveKey="1"
        tabPosition="left"
        items={items}
      ></Tabs>
    </div>
  );
}
