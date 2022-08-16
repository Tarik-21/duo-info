import React from "react";
import {Link} from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-orange-500 text-white font-bold rounded-lg h-48">
      <p className="text-2xl">Votre panier est actuellement vide.</p>
      <p>
        Pour ajouter d’autres articles à votre panier, cliquez sur « Continuer
        mes achats »
      </p>
      <Link to="/">
        <p class="inline-block px-12 py-3 text-sm font-bold font-medium text-orange-500 bg-white border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150">
          Continuer vos achats
        </p>
      </Link>
    </div>
  );
};

export default CartEmpty;
