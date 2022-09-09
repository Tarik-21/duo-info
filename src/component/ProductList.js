import React, { useState, useEffect } from "react";
import Product from "./Product";
import Slider from "react-slick";

const ProductList = ({ title,category, products, slidesToShow }) => {
  const [productFilter, setProductFilter] = useState([]);
  useEffect(() => {
    if (title === "Nouveaux") {
      setProductFilter(products);
    } else {
      setProductFilter(
        products.filter((product) => product.subCategory.nom === category)
      );
    }
  }, [products]);
  const settings = {
    className: "flex items-stretch",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 3,

    appendDots: (dots) => {
      return <ul style={{ margin: "0px", bottom: "-30px" }}>{dots}</ul>;
    },
  };
  return (
    <div className="homeSlide mx-auto my-12">
      <div>
        <span class="inline-block w-16 h-1 bg-orange-500"></span>

        <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
          {title}
        </h2>
      </div>

      <Slider {...settings}>
        {productFilter?.map((product, index) => (
          <Product product={product} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductList;
