import React, { useState } from "react";
import { Link } from "react-router-dom";

import { urlFor } from "../../client";
import { useStateContext } from "../../Context/StateContext";
import {
  BsCheckLg,
  BsPlusCircleFill,
  BsCartPlusFill,
  BsWhatsapp,
} from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";
import Features from "./Features";

const ProductDetails = ({product}) => {
  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);

  const {onAdd} = useStateContext();
  const nameUrl = window.location.href;

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  
  return (
    <>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(product.images && product.images[index])} className="product-detail-image object-contain w-3/4 mx-auto h-56 lg:h-72" />
          </div>

          <div className="small-images-container">
            {product.images?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image object-contain" : "small-image "
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          <h4 className="mb-1 font-bold text-3xl">
            {product.title}
          </h4>
          <p className="text-orange-500 font-semibold">
            <Link to="/">{product.subCategory.nom}</Link>
          </p>
          <div className="rounded-lg bg-slate-200 py-2 mt-1 relative ">
            <span className="absolute right-0 top-2  bg-orange-500 text-white font-semibold p-1 rounded-l-xl ">
              -{product.reduction}%
            </span>
            <span className="text-orange-500 font-bold text-2xl p-5">
              {Intl.NumberFormat('de-DE').format(product.price)} Dhs
            </span>
          </div>
          <div className="flex flex-row items-center mt-2">
            <BsCheckLg className="text-green-600 mr-2" />
            <span className="text-green-600 font-bold mb-1"> En stock</span>
          </div>
          <p>
            {product.subDescription}
          </p>
          <div className="flex flex-row items-center">
            <span className="text-md font-bold mr-2">Quantité : </span>
            <BsPlusCircleFill className="text-orange-500 text-xl mr-2 cursor-pointer" onClick={incQty} />
            <span className="mr-2 font-bold">{qty}</span>
            <FaMinusCircle className="text-orange-500 text-xl cursor-pointer" onClick={decQty} />
          </div>
          <div className="mt-6">
            <a
            href= {`https://wa.me/212633977642?text=Bonjour%20monsieur,%20je%20veux%20ce%20produit%20:%20${nameUrl}`}
            target="_blank"
              class="cursor-pointer inline-block  mr-2 mb-6 px-12 py-3 text-sm font-medium text-white bg-green-500 border border-green-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
            >
              <BsWhatsapp className="inline-block mb-1 mr-2  text-xl" />
              Whatsapp

            </a>
            <p
              class="cursor-pointer inline-block  mb-6 mr-2 px-12 py-3 text-sm font-bold font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
              onClick={()=>onAdd(product,qty)}
            >
              <BsCartPlusFill className="inline-block mb-1 mr-2  text-xl" />
              Ajouter au panier
            </p>
          </div>
        </div>
      </div>
      <Features description={product.description} caracteristiques={product.caracteristiques}  />
    </>
  );
};

export default ProductDetails;
