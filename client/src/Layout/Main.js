import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import useDarkSide from "../Components/useDarkSide";
import "../theme.css";

const Main = () => {
  const [colorTheme] = useDarkSide();
  console.log(colorTheme, "Inside Main");
  return (
    <div
      className={`my-component ${
        colorTheme === "light" ? "dark-theme" : "light-theme"
      }`}
    >
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
