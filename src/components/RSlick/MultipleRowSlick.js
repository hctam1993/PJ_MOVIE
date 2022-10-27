import React from "react";
import { DesktopView, TabletView, MobileView } from "../HOC/Responesive";
import MultipleRowSlickDesktop from "./MultipleRowSlickDesktop";
import MultipleRowSlickMobile from "./MultipleRowSlickMobile";
import MultipleRowSlickTable from "./MultipleRowSlickTable";

export default function MultipleRowSlick() {
  return (
    <div id="lichChieu">
      <DesktopView>
        <MultipleRowSlickDesktop />
      </DesktopView>
      <TabletView>
        <MultipleRowSlickTable />
      </TabletView>
      <MobileView>
        <MultipleRowSlickMobile />
      </MobileView>
    </div>
  );
}
