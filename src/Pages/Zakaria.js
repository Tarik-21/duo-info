import React, { useState } from "react";
import Galerie from "../utils/GalerieZakaria";

const Zakaria = () => {
  const [images, setImages] = useState([]);
  const buttonHandler = (slug) => {
    const galerieFilter = Galerie.filter((item) => item.slug === slug);
    setImages(galerieFilter[0].images);
  };

  return (
    <div>
      {Galerie.map((item) => (
        <>
          <button className="m-6" onClick={() => buttonHandler(item.slug)}>
            {item.title}
          </button>
        </>
      ))}
      <div className="w-4/5 mx-auto flex flex-row">
         {images.map(image=>(
            <img src={image} alt="image" width={200} />
        ))}
      </div>
    </div>
  );
};

export default Zakaria;
