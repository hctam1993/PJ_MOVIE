import React, { useEffect } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/css/CircleRating.css";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getLichChieuTheoPhim } from "../../redux/slice/theaterSlice";
import { useParams } from "react-router-dom";

export default function Detail() {
  const dataLichChieuTheoPhim = useSelector(
    (state) => state.theaterSlice.dataLichChieuTheoPhim
  );
  let dispatch = useDispatch();
  const { id } = useParams();
  console.log("id: ", id);
  useEffect(() => {
    dispatch(getLichChieuTheoPhim(id));
  }, []);
  console.log("dataLichChieuTheoPhim: ", dataLichChieuTheoPhim);
  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/1000)",
        minHeight: "100vh",
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
          <div className="col-span-4 col-start-2">
            <div className="grid grid-cols-2">
              <div>
                <img src="https://picsum.photos/200/350" alt="123" />
              </div>
              <div className="ml-5">
                <p>Ten phim</p>
                <p>Mota</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 col-start-8">
            <div className="c100 p50 big">
              <span>50%</span>
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
