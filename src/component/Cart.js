import React from "react";
import { useStateContext } from "../Context/StateContext";
import { urlFor } from "../client";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems,onRemove } = useStateContext();
  const ProductCart = ({ product }) => (
    <>
      <div className="flex flex-row w-full h-24" key={product._id}>
        <div className="w-1/3 border-2 border-border-zinc-200 rounded-xl flex flex-row justify-center items-center">
          <img
            src={urlFor(product.images[0])}
            alt="image"
            className="object-contain w-3/4 h-20"
          />
        </div>
        <div className="w-2/3 flex flex-row">
          <div className="flex flex-col justify-between w-4/5 ml-2">
            <div>
              <Link
                to={`/produit/${product.slug.current}`}
                state={{ produit: product }}
              >
                <p className="text-left leading-5 font-bold text-sm hover:text-orange-500">
                  {product.title}
                </p>
              </Link>

              <p className="text-left text-sm text-orange-500">
                {product.subCategory.nom}
              </p>
            </div>
            <p className="font-bold text-orange-500 text-xl text-left text-lg">
              {Intl.NumberFormat('de-DE').format(product.price)} Dhs
            </p>
          </div>
          <div className="w-1/5 flex flex-col items-center justify-between">
            <MdDelete size={20} className="hover:text-orange-500" onClick={()=>onRemove(product)} />
            <p className="text-sm text-zinc-500 mb-1">
              Qté : {product.quantity}
            </p>
          </div>
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
  return (
    <div className="cart flex flex-col bg-white z-50 overflow-y-scroll drop-shadow-md rounded-b-2xl border-2 border-t-orange-500 px-4 py-5">
      <div className="flex flex-col">
        {cartItems.length >= 1 &&
          cartItems.map((item) => <ProductCart product={item} />)}
        {cartItems.length === 0 && <div>Votre panier est vide.</div>}
      </div>
      {cartItems.length >= 1 && (
        <Link to="cart">
          <p class="inline-block text-center mx-10 px-20 py-3 text-sm font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150">
            Voir le panier
          </p>
        </Link>
      )}
    </div>
  );
};

export default Cart;
