import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";

import {
  getDataListMovie,
  setPhimDangChieu,
  setPhimSapChieu,
} from "../../redux/slice/movieSlice";
import ItemMovies from "../../pages/HomePage/HomeTemplate/ItemMovies";
// import "../../assets/css/MultiRowHome.css";
// import styleSlick from "./MultipleRowSlick.module.css";
import Trailer from "../Trailer/Trailer";

export default function MultipleRowSlickMobile() {
  const { dataListMovie } = useSelector((state) => state.movieSlice);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataListMovie());
  }, []);
  let renderMovies = () => {
    return dataListMovie.map((data, index) => {
      return (
        <div className="" key={index}>
          <ItemMovies data={data} />
        </div>
      );
    });
  };
  const SlickButtonFix = ({ currentSlide, slideCount, children, ...props }) => (
    <span {...props}>{children}</span>
  );
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="multiRow my-3 w-11/12 mx-auto bg-gray-200">
      <div className="xl:mb-10 mb-2">
        <button
          className="bg-red-500 hover:bg-red-600 focus:bg-red-800 text-white md:px-4 md:py-2 px-2 py-1 font-medium md:font-semibold rounded mr-2"
          onClick={() => {
            dispatch(setPhimDangChieu());
          }}
        >
          PHIM ĐANG CHIẾU
        </button>{" "}
        <button
          className="bg-red-500 hover:bg-red-600 focus:bg-red-800 text-white md:px-4 md:py-2 px-2 py-1 font-medium md:font-semibold rounded mr-2"
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
