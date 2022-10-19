import React from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.movieSlice);
  // console.log("isLoading: ", isLoading);

  return isLoading ? (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black flex justify-center items-center z-50 overflow-hidden">
      <PacmanLoader color="#FFDE00" speedMultiplier={2} size={50} />
    </div>
  ) : (
    <></>
  );
}
