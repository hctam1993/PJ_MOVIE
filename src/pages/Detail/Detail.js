import React from "react";
import {
  DesktopView,
  MobileView,
  TabletView,
} from "../../components/HOC/Responesive";
import DetailDesktop from "./DetailDesktop";
import DetailMobile from "./DetailMobile";
import DetailTable from "./DetailTable";

export default function Detail() {
  return (
    <div>
      <DesktopView>
        <DetailDesktop />
      </DesktopView>
      <TabletView>
        <DetailTable />
      </TabletView>
      <MobileView>
        <DetailMobile />
      </MobileView>
    </div>
  );
}
