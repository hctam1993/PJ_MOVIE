import React from "react";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import HomeCarousel from "../../pages/HomePage/HomeTemplate/HomeCarousel";
import HomeTabMovie from "./HomeTabMovies/HomeTabMovie";

export default function HomePage() {
  return (
    <section className="text-gray-600  bg-gray-200">
      <div className="container mx-auto">
        <HomeCarousel />
        <MultipleRowSlick />
        <HomeTabMovie />
      </div>
    </section>
  );
}
