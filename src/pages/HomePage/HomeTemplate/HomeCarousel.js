import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../../assets/css/CarouselHome.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataBanner } from "../../../redux/slice/movieSlice";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { dataBanner } = useSelector((state) => state.movieSlice);
  // console.log("dataBanner: ", dataBanner);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataBanner());
  }, []);

  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );

  let renderCarousel = () => {
    return dataBanner.map((item, index) => {
      return (
        <div key={item.maBanner + index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img src={item.hinhAnh} className="w-full opacity-0" alt="" />
          </div>
        </div>
      );
    });
  };

  return (
    <section className="container">
      <Carousel
        autoplay
        arrows={true}
        prevArrow={
          <SlickButtonFix>
            <LeftOutlined />
          </SlickButtonFix>
        }
        nextArrow={
          <SlickButtonFix>
            <RightOutlined />
          </SlickButtonFix>
        }
      >
        {renderCarousel()}
      </Carousel>
    </section>
  );
}
