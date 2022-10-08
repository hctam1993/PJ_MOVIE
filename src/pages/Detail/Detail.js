import React from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";

export default function Detail() {
  return (
    <div
      style={{
        backgroundImage: "url(https://picsum.photos/1000)",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ padding: 150, minHeight: "100vh" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={80} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      ></CustomCard>
    </div>
  );
}
