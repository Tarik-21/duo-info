import React, { useState } from "react";
import { useStateContext } from "../Context/StateContext";
import FirstSlide from "../component/Home/FirstSlide";
import Marque from "../component/Home/Marque";
import ProductList from "../component/ProductList";

import HomeModel from "../component/HomeModel";
import HikVision from "../component/Home/HikVision";

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
        {/* <Marque data={marques} /> */}
        <HikVision />
        <ProductList
          title="PC, Ordinateur bureau et portable"
          category="PC, Ordinateur bureau et portable"
          products={products}
          slidesToShow={3}
        />
         <ProductList
          title="Imprimante et scanner"
          category="Imprimante et scanner"
          products={products}
          slidesToShow={3}
        />
         <ProductList
          title="Téléphone et Tablettes"
          category="Téléphone et Tablettes"
          products={products}
          slidesToShow={3}
        />
       
      </div>
    </>
  );
};

export default Home;
