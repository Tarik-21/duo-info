import React from "react";
import Slider from "react-slick";
import MarqueData from "../../utils/MarqueData";


const Marque = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots) => {
        return <ul style={{ margin: "0px", bottom: "-30px" }}>{dots}</ul>
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
        {MarqueData.map((value)=>{
            return (
                <div key={value.id}>
                    <img src={value.image} className="mr-5" />
                </div>
            )
        })}
      </Slider>
    </div>
  );
};

export default Marque;
