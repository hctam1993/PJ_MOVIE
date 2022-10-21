import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.min.css";
import "./assets/css/font.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux/slice/userSlice";
import movieSlice from "./redux/slice/movieSlice";
import theaterSlice from "./redux/slice/theaterSlice";
import trailerSlice from "./redux/slice/trailerSlice";
import checkoutSlice from "./redux/slice/checkoutSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    userSlice,
    movieSlice,
    theaterSlice,
    trailerSlice,
    checkoutSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
