import React from "react";
import { urlFor } from "../client";
import { Link } from "react-router-dom";
import { useStateContext } from "../Context/StateContext";

import {BsFillCartPlusFill} from 'react-icons/bs'

const Product = ({ product }) => {
  const {onAdd} = useStateContext();
  return (
    <>
      <Link
        class="relative block border border-gray-100"
        to={`/produit/${product.slug.current}`}
        state={{ produit: product }}
      >
        <img
          class="object-contain w-3/4 mx-auto h-56 lg:h-72 hover:scale-110 duration-150"
          src={urlFor(product.images[0])}
          alt={product.title}
          loading="lazy"
        />
      </Link>

      <div class="p-6">
        <strong class="inline-block px-3 py-1 text-xs font-medium bg-orange-400 text-white">
          Nouveau
        </strong>

        <h5 class="mt-1 text-lg text-orange-500">{product.subCategory.nom}</h5>

        <Link
          to={`/produit/${product.slug.current}`}
          state={{ produit: product }}
        >
          <h5 class="mt-1 text-lg font-bold">{product.title}</h5>
        </Link>

        <p class="mt-1 text-base text-gray-700">{Intl.NumberFormat('de-DE').format(product.price)} Dhs</p>

        <p
          class="flex flex-row justify-center items-center block cursor-pointer w-full p-4 mt-4 text-base text-center font-medium bg-orange-500 rounded-sm text-white"
          onClick={()=>(onAdd(product,1))}
        >
          <BsFillCartPlusFill className="mr-2 text-xl" />
          Ajouter au panier
        </p>
      </div>
    </>
  );
};

export default Product;
