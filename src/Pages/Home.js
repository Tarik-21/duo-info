import React, { useEffect, useState } from "react";
import FirstSlide from "../component/Home/FirstSlide";
import Marque from "../component/Home/Marque";
import ProductList from "../component/ProductList";

import { client } from "../client";

const Home = () => {
  const [bannerData, setBannerData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const querybanner = '*[_type == "banner"]';
    client.fetch(querybanner).then((data) => {
      setBannerData(data);
    });
    const queryProducts =
      '*[_type=="products"]{_id,title,price,slug,subDescription,description,images,reduction,category->,subCategory->,caracteristiques,stock,topvente}';
    client.fetch(queryProducts).then((data) => {
      setProducts(data);
    });
    
    
  }, []);

  return (
    <>
      <div className="banner flex flex-row mx-auto w-4/5 mt-5 px-10 py-4 rounded-2xl">
        <FirstSlide width="w-full" bannerData={bannerData} />
      </div>
      <div className="w-4/5 mx-auto">
        <Marque />
        <ProductList title="Iphone" products={products} slidesToShow={3} />
        <ProductList title="Ipad" products={products} slidesToShow={3} />
        <ProductList title="Mac" products={products} slidesToShow={3} />
      </div>
    </>
  );
};

export default Home;
