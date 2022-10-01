import React from "react";
import { DesktopView, MobileView, TabletView } from "../HOC/Responsive";
import HeaderDesktop from "../Header/HeaderDestop";
import HeaderTablet from "../Header/HeaderTablet";
import HeaderMobile from "../Header/HeaderMobile";

export default function Header() {
  return (
    <div>
      <DesktopView>
        <HeaderDesktop />
      </DesktopView>
      <TabletView>
        <HeaderTablet />
      </TabletView>
      <MobileView>
        <HeaderMobile />
      </MobileView>
    </div>
  );
}
