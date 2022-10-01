import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ Component }) {
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
}
