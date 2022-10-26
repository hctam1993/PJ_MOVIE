import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import {
  getDataListMovie,
  setPhimDangChieu,
  setPhimSapChieu,
} from "../../redux/slice/movieSlice";
import ItemMovies from "../../pages/HomePage/HomeTemplate/ItemMovies";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "../../assets/css/MultiRowHome.css";
import styleSlick from "./MultipleRowSlick.module.css";
import Trailer from "../Trailer/Trailer";

export default function MultipleRowSlick() {
  const { dataListMovie } = useSelector((state) => state.movieSlice);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataListMovie());
  }, []);
  let renderMovies = () => {
    return dataListMovie.map((data, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <ItemMovies data={data} />
        </div>
      );
    });
  };
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );
  const settings = {
    className: "center variable-width",
    centerMode: false,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 4,
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
    <div className="multiRow xl:my-10 w-11/12 mx-auto bg-gray-200 pt-20">
      <div className="xl:mb-10 mb-4">
        <button
          className="bg-red-500 hover:bg-red-600 focus:bg-red-800 text-white px-8 py-3 font-semibold rounded mr-2"
          onClick={() => {
            dispatch(setPhimDangChieu());
          }}
        >
          PHIM ĐANG CHIẾU
        </button>{" "}
        <button
          className="bg-red-500 hover:bg-red-600 focus:bg-red-800 text-white px-8 py-3 font-semibold rounded mr-2"
          onClick={() => {
            dispatch(setPhimSapChieu());
          }}
        >
          PHIM SẮP CHIẾU
        </button>
      </div>
      <Slider {...settings}>{renderMovies()}</Slider>
      <Trailer />
    </div>
  );
}
