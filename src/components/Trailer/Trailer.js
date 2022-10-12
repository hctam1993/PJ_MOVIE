import React, { Fragment, useState } from "react";
import ModalVideo from "react-modal-video";
import { useSelector, useDispatch } from "react-redux";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { setClose, setOpen } from "../../redux/slice/trailerSlice";

export default function Trailer() {
  const { isOpen, srcURL } = useSelector((state) => state.trailerSlice);
  let dispatch = useDispatch();
  // console.log("isOpen, srcURL: ", isOpen, srcURL);

  return (
    <Fragment>
      <ModalVideo
        channel="custom"
        autoplay
        isOpen={isOpen}
        url={srcURL}
        onClose={() => {
          dispatch(setClose());
        }}
      />
    </Fragment>
  );
}
