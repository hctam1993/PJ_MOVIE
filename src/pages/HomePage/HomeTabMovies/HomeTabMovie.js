import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import HomeItemTabMovie from "./HomeItemTabMovie";
import { useDispatch, useSelector } from "react-redux";
import { getLichChieuTheoRap } from "../../../redux/slice/theaterSlice";
import "../../../assets/css/TabHome.css";

export default function HomeTabMovie() {
  let { dataLichChieuTheoRap } = useSelector((state) => state.theaterSlice);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLichChieuTheoRap());
  }, []);

  let itemsListCumRap = (heThongRap) => {
    return heThongRap.lstCumRap.map((cumRap, index) => {
      return {
        label: (
          <div className="w-48 text-left">
            <p className="text-red-700 truncate">{cumRap.tenCumRap}</p>
            <p className="text-green-700 truncate">{cumRap.diaChi}</p>
          </div>
        ),
        key: cumRap.maCumRap + index,
        children: (
          <div
            style={{ height: 500, overflowY: "scroll" }}
            className="h-32 scrollbar scrollbar-thumb-green-600 scrollbar-track-green-300 overflow-y-scroll hover:scrollbar-thumb-red-500"
          >
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
      label: <img className="w-16 h-16" src={heThongRap.logo} />,
      key: heThongRap.maHeThongRap + index,
      children: (
        <Tabs
          tabPosition="left"
          style={{ height: 500 }}
          items={itemsListCumRap(heThongRap)}
        ></Tabs>
      ),
    };
  });

  return (
    <div>
      <Tabs
        style={{ height: 500 }}
        defaultActiveKey="1"
        tabPosition="left"
        items={items}
      ></Tabs>
    </div>
  );
}
