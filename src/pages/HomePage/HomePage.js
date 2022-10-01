import React from "react";
import HomeCarousel from "../../pages/HomePage/HomeTemplate/HomeCarousel";
import HomeTabMovie from "./HomeTabMovies/HomeTabMovie";
import HomeListMovie from "./HomeTemplate/HomeListMovie";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <HomeCarousel />
      <HomeListMovie />
      <HomeTabMovie />
    </div>
  );
}
