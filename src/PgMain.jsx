import React from "react";
import "./Pgmain.css";
import PgVideo from "./PgVideo";
import SidebarKataloq from "./SidebarKataloq";
import Carousel from "./Carousel";
import Endirim_carousel from "./endirim_carousel";
import Partnyor from "./Partnyor";
import MainCarousel from "./MainCarousel";





const PgMain = () => {
  return (
    <>
      <div className="maindiv">
        <div className="mainsct">
          <SidebarKataloq />
          <Carousel />
          <Endirim_carousel />
        </div>
          <MainCarousel />
          <PgVideo />
          <Partnyor />
      </div>
    </>
  );
};

export default PgMain;
