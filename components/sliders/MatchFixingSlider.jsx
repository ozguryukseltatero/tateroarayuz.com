"use client";

import arjentina from "/public/img/matchfixing/arjentina.png";
import aus from "/public/img/matchfixing/aus.png";
import denmark from "/public/img/matchfixing/denmark.png";
import farense from "/public/img/matchfixing/farense.png";
import france from "/public/img/matchfixing/france.png";
import maxico from "/public/img/matchfixing/maxico.png";
import oviedo from "/public/img/matchfixing/oviedo.png";
import poland from "/public/img/matchfixing/poland.png";
import tenerif from "/public/img/matchfixing/tenerif.png";
import tunisia from "/public/img/matchfixing/tunisia.png";

import Image from "next/image";
import Slider from "react-slick";

const MatchFixingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1243,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="match__fixing__wrap top__bottom__space left__right__space owl-theme owl-carousel">
      <Slider {...settings}>
       
      </Slider>
    </div>
  );
};

export default MatchFixingSlider;
