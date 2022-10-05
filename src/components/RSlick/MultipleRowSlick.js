import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingOn, setLoadingOff } from "../../redux/slice/spinnerSlice";
import { getDataListMovie } from "../../redux/slice/movieSlice";
import ItemMovies from "../../pages/HomePage/HomeTemplate/ItemMovies";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../assets/css/MultiRowHome.css";
import styleSlick from "./MultipleRowSlick.module.css";

export default function MultipleRowSlick() {
  const { dataListMovie } = useSelector((state) => state.movieSlice);
  // console.log("dataListMovie: ", dataListMovie);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoadingOn());
    dispatch(getDataListMovie());
    dispatch(setLoadingOff());
  }, []);
  let renderMovies = () => {
    return dataListMovie.map((data, key) => {
      return (
        <div className={`${styleSlick["width-item"]}`}>
          <ItemMovies data={data} key={key} />
        </div>
      );
    });
  };
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    variableWidth: true,
    arrows: true,
    prevArrow: (
      <SlickButtonFix>
        <LeftOutlined />
      </SlickButtonFix>
    ),
    nextArrow: (
      <SlickButtonFix>
        <RightOutlined />
      </SlickButtonFix>
    ),
  };
  return (
    <div className="multiRow">
      <h2>Multiple Rows</h2>
      <Slider {...settings}>
        {renderMovies()}
        {/* <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
        <div>
          <h3>10</h3>
        </div>
        <div>
          <h3>11</h3>
        </div>
        <div>
          <h3>12</h3>
        </div>
        <div>
          <h3>13</h3>
        </div>
        <div>
          <h3>14</h3>
        </div>
        <div>
          <h3>15</h3>
        </div>
        <div>
          <h3>16</h3>
        </div> */}
      </Slider>
    </div>
  );
}