import React from "react";
import {
  DesktopView,
  TabletView,
  MobileView,
} from "../../../components/HOC/Responesive";
import HomeTabMovieDesktop from "./HomeTabMovieDesktop";
import HomeTabMovieMobile from "./HomeTabMovieMobile";
import HomeTabMovieTable from "./HomeTabMovieTable";

export default function HomeTabMovie() {
  return (
    <div>
      <DesktopView>
        <HomeTabMovieDesktop />
      </DesktopView>
      <TabletView>
        <HomeTabMovieTable />
      </TabletView>
      <MobileView>
        <HomeTabMovieMobile />
      </MobileView>
    </div>
  );
}
