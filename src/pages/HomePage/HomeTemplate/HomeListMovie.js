import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingOn, setLoadingOff } from "../../../redux/slice/spinnerSlice";
import { getDataListMovie } from "../../../redux/slice/movieSlice";
import ItemMovies from "./ItemMovies";

export default function HomeListMovie() {
  const { dataListMovie } = useSelector((state) => state.movieSlice);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingOn());
    dispatch(getDataListMovie());
    dispatch(setLoadingOff());
  }, []);
  let renderMovies = () => {
    return dataListMovie.map((data, key) => {
      return <ItemMovies data={data} key={key} />;
    });
  };

  return <div className="grid grid-cols-4 gap-4">{renderMovies()}</div>;
}
