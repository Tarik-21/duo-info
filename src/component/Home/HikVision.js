import React from "react";

import Slider from "react-slick";

const HikVision = () => {
  const settings = {
    dots: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px", bottom: "-30px" }}>{dots}</ul>;
    },
  };
  return (
    <div className="homeSlide mx-auto my-12">
      <div>
        <span class="inline-block w-16 h-1 bg-orange-500"></span>

        <h2 class="mt-1 mb-2 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
          Hikvision
        </h2>
      </div>

      <Slider {...settings}>
        <div className="w-full">
            <img src='./images/hikvision/1.PNG' alt="img" className="w-full lg:h-96 md:h-64"/>
        </div>
        <div className="w-full">
            <img src='./images/hikvision/2.png' alt="img" className="w-full lg:h-96 md:h-64"  />
        </div>
        <div className="w-full">
            <img src='./images/hikvision/3.png' alt="img" className="w-full lg:h-96 md:h-64" />
        </div>
        <div className="w-full">
            <img src='./images/hikvision/4.png' alt="img" className="w-full lg:h-96 md:h-64" />
        </div>
      </Slider>
    </div>
  );
};

export default HikVision;
