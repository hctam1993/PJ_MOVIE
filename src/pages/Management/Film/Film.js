import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "antd";
import FilmTable from "./FilmTable";
import {
  getDataListMovie,
  setSearchFilm,
} from "../../../redux/slice/movieSlice";
import { NavLink } from "react-router-dom";

const { Search } = Input;

export default function Film() {
  const { dataListMovie, dataListMovieClone } = useSelector(
    (state) => state.movieSlice
  );

  // console.log("dataListMovie", dataListMovie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataListMovie());
  }, []);
  const onSearch = (e) => {
    dispatch(setSearchFilm(e.target.value));
  };

  const data = dataListMovieClone;
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl">Quản lý phim</h1>
      <div>
        <NavLink to="/management/film/addnew">
          <Button>Thêm phim</Button>
        </NavLink>
      </div>
      <Search
        placeholder="Nhập phim muốn tìm"
        allowClear
        onChange={onSearch}
        style={{
          width: 600,
        }}
        className="py-2"
      />
      <FilmTable filmList={data} />
    </div>
  );
}
