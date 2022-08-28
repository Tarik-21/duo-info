import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";

import { urlFor } from "../../client";
import Slider from "react-slick";

const Marque = ({ data }) => {
  const navigate = useNavigate();

  const buttonHandler = (marque) => {
    navigate({
      pathname: "produits/all",
      search: createSearchParams({
        search: marque,
      }).toString(),
    });
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px", bottom: "-30px" }}>{dots}</ul>;
    },
  };
  return (
    <div className="homeSlide mx-auto my-12">
      <div>
        <span class="inline-block w-16 h-1 bg-orange-500"></span>

        <h2 class="mt-1 mb-2 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
          Marques Partenaires
        </h2>
      </div>

      <Slider {...settings}>
        {data.map((value) => {
          return (
            <div key={value._id} className="cursor-pointer group relative">
              <img
                src={urlFor(value.image)}
                className="mr-5 object-cover h-64"
              />
              <div class="banner absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <button
                  class="mt-5 px-8 py-3 rounded-full bg-black text-white font-bold hover:bg-white hover:text-orange-500 duration-300"
                  onClick={() => {
                    buttonHandler(value.nom);
                  }}
                >
                  Découvrez
                </button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Marque;
