import React, { Component } from "react";
import Slider from "react-slick";
import "./Partnyor.css";
import img1 from "./image/Partnyorlar/Acer_png.png";
import img2 from "./image/Partnyorlar/Bosh_png.png";
import img3 from "./image/Partnyorlar/hoffman_png.png";
import img4 from "./image/Partnyorlar/hp_png.png";
import img5 from "./image/Partnyorlar/Huaewei_png.png";
import img6 from "./image/Partnyorlar/LG_png.png";
import img7 from "./image/Partnyorlar/Panasonic_png.png";
import img8 from "./image/Partnyorlar/Philips.png.png";
import img9 from "./image/Partnyorlar/PlayStation_logo_and_wordmark.svg-1_png.png";
import img10 from "./image/Partnyorlar/Samsung_png.png";
import img11 from "./image/Partnyorlar/Sony_png.png";
import img12 from "./image/Partnyorlar/Tefal-1200x1200_Logo_png.png";
import img13 from "./image/Partnyorlar/Toshiba_png.png";
import img14 from "./image/Partnyorlar/Gigaest_png.png";
import img15 from './image/Partnyorlar/TOYOTA_png.png'
import { useState } from "react";




export default class Partnyorlar extends Component {
  render() {
    var settings = {
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      pauseOnHover: true,
    };
    return (
      <div className="Partnyor_Carousel">
        <div>
          <b>Partnyorlar</b>
          <div className="MyPartnyor">
            <Slider {...settings}>
              <div className="AcerSl">
                <img src={img1} />
              </div>
              <div className="BoschSl">
                <img src={img2} />
              </div>
              <div className="HoffmanSl">
                <img src={img3} />
              </div>
              <div className="HpSl">
                <img src={img4} />
              </div>
              <div className="HuaweiSl">
                <img src={img5} />
              </div>
              <div className="LgSl">
                <img src={img6} />
              </div>
              <div className="PanasonicSl">
                <img src={img7} />
              </div>
              <div className="PhilipsSl">
                <img src={img8} />
              </div>
              <div className="PlaystationSl">
                <img src={img9} />
              </div>
              <div className="SamsungSl">
                <img src={img10} />
              </div>
              <div className="SonySl">
                <img src={img11} />
              </div>
              <div className="TefalSl">
                <img src={img12} />
              </div>
              <div className="ToshibaSl">
                <img src={img13} />
              </div>
              <div className="GigasetSl">
                <img src={img14} />
              </div>
              <div className="ToyotaSl">
                <img src={img15} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
