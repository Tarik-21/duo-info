import React from "react";
import Slider from "react-slick";

import { urlFor } from "../../client";

const FirstSlide = ({ width, bannerData }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div className={`${width} first-slide`}>
      <Slider {...settings}>
        {bannerData.map((value, index) => {
          return (
            <>
              <div className="flex flex-row justify-between" key={index}>
                <div className="w-1/2 my-4">
                  <h1 className="text-5xl font-bold mb-6 text-white">
                    {value.title}
                  </h1>
                  <p className="mb-6 text-white">{value.description}</p>

                  <a
                    href={value.url}
                    className="xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider text-white bg-black transition hover:bg-white hover:text-orange-500 active:bg-orange-600 on:bg-orange-600"
                  >
                    Visit Collections
                  </a>
                </div>
                <div className="w-1/2 flex flex-row justify-end">
                  <img
                    src={urlFor(value.image)}
                    alt=""
                    className="max-h-96 text-right"
                  />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default FirstSlide;
