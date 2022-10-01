import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../../assets/css/CarouselHome.css";
import React from "react";
import { useSelector } from "react-redux";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "cover%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel(props) {
  const { dataBanner } = useSelector((state) => state.movieSlice);
  console.log("dataBanner: ", dataBanner);

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
  );
}
