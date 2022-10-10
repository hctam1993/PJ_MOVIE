import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/css/CircleRating.css";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getLichChieuTheoPhim } from "../../redux/slice/theaterSlice";
import { useParams } from "react-router-dom";
import moment from "moment";

export default function Detail() {
  const dataLichChieuTheoPhim = useSelector(
    (state) => state.theaterSlice.dataLichChieuTheoPhim
  );
  let dispatch = useDispatch();
  const { id } = useParams();
  // console.log("id: ", id);
  useEffect(() => {
    dispatch(getLichChieuTheoPhim(id));
    window.scrollTo(0, 0);
  }, []);
  console.log("dataLichChieuTheoPhim: ", dataLichChieuTheoPhim);
  return (
    <div
      style={{
        backgroundImage: `url(${dataLichChieuTheoPhim.hinhAnh})`,
        minHeight: "100vh",
        backgroundSize: "100%",
        backgroundPosition: "center",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={80} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-2">
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <img
                  src={dataLichChieuTheoPhim.hinhAnh}
                  alt={dataLichChieuTheoPhim.biDanh}
                />
              </div>
              <div className="ml-5 col-span-2">
                <p className="">
                  {moment(dataLichChieuTheoPhim.ngayKhoiChieu).format(
                    "DD-MM-YYYY"
                  )}
                </p>
                <p className="text-4xl mb-4">{dataLichChieuTheoPhim.tenPhim}</p>
                <p className="">{dataLichChieuTheoPhim.moTa}</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 col-start-8">
            <div className="c100 p50 big">
              <span>{dataLichChieuTheoPhim.danhGia * 10}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 pl-20">
          <Tabs
            tabPosition={"left"}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab ${id}`,
              };
            })}
          />
        </div>
      </CustomCard>
    </div>
  );
}
