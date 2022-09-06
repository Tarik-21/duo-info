import React, { useState } from "react";
import { useStateContext } from "../Context/StateContext";
import FirstSlide from "../component/Home/FirstSlide";
import Marque from "../component/Home/Marque";
import ProductList from "../component/ProductList";

import HomeModel from "../component/HomeModel";

const Home = () => {
  const [openModel, setOpenModel] = useState(true);

  const { products, bannerData, marques } = useStateContext();
  const closeModel = () => {
    setOpenModel(false);
  };

  return (
    <>
      {openModel && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-screen z-40 bg-slate-900 opacity-50"
            onClick={closeModel}
          />
          <HomeModel closeModel={closeModel}/>
        </>
      )}

      <div className="banner flex flex-row mx-auto w-4/5 mt-5 px-10 py-4 rounded-2xl">
        <FirstSlide width="w-full" bannerData={bannerData} />
      </div>
      <div className="w-4/5 mx-auto">
        <Marque data={marques} />
        <ProductList
          title="Iphone"
          category="Iphone"
          products={products}
          slidesToShow={3}
        />
        <ProductList
          title="Ipad"
          category="Ipad"
          products={products}
          slidesToShow={3}
        />
        <ProductList
          title="Mac"
          category="Mac"
          products={products}
          slidesToShow={3}
        />
      </div>
    </>
  );
};

export default Home;
