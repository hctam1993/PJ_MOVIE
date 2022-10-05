import React from "react";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import HomeCarousel from "../../pages/HomePage/HomeTemplate/HomeCarousel";
import HomeTabMovie from "./HomeTabMovies/HomeTabMovie";
import HomeListMovie from "./HomeTemplate/HomeListMovie";

export default function HomePage() {
  return (
    <section className="text-gray-600">
      <div className="container mx-auto">
        <HomeCarousel />
        <MultipleRowSlick />
        {/* <HomeListMovie /> */}
        <HomeTabMovie />
      </div>
    </section>
  );
}
