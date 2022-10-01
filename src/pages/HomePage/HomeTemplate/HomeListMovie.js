import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoadingOn, setLoadingOff } from "../../../redux/slice/spinnerSlice";
import { movieService } from "../../../services/movieService";
import ItemMovies from "./ItemMovies";

export default function HomeListMovie() {
  const [movies, setMovies] = useState([]);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingOn());
    movieService
      .getListMovie()
      .then((res) => {
        // console.log(res);
        setMovies(res.data.content);
        dispatch(setLoadingOff());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOff());
      });
  }, []);
  let renderMovies = () => {
    return movies.map((data, key) => {
      return <ItemMovies data={data} key={key} />;
    });
  };

  return <div className="grid grid-cols-4 gap-4">{renderMovies()}</div>;
}
