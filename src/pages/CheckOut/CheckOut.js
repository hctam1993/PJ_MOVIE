import React from "react";
import {
  DesktopView,
  TabletView,
  MobileView,
} from "../../components/HOC/Responesive";
import CheckOutDesktop from "./CheckOutDesktop";
import CheckOutTable from "./CheckOutTable";
import CheckOutMobile from "./CheckOutMobile";

const App = () => {
  return (
    <div className="">
      <DesktopView>
        <CheckOutDesktop />
      </DesktopView>
      <TabletView>
        <CheckOutTable />
      </TabletView>
      <MobileView>
        <CheckOutMobile />
      </MobileView>
    </div>
  );
};
export default App;
