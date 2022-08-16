import React from "react";
import { useStateContext } from "../../Context/StateContext";
import { Link } from "react-router-dom";

const TotalCart = () => {
  const { totalPrice,user } = useStateContext();
  return (
    <div className="w-1/3 mt-3">
      <p className="text-xl w-full">Total Panier</p>
      <div className="flex flex-row mt-2">
        <span class="inline w-24 h-1 bg-orange-500"></span>
        <span class="inline-block w-full h-1 bg-slate-100"></span>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between my-2">
          <p className="my-0 font-bold">Sous-total</p>
          <p>{Intl.NumberFormat('de-DE').format(totalPrice)} Dhs</p>
        </div>
        <span class="inline-block w-full h-0.5 bg-slate-100"></span>
        <div className="flex flex-row justify-between my-2">
          <p className="my-0 font-bold">Expédition</p>
        </div>
        <div className="flex flex-row justify-between mb-2">
          <p className="my-0">Frais de service:</p>
          <p>45Dhs</p>
        </div>
        <span class="inline-block w-full h-0.5 bg-slate-100"></span>
        <div className="flex flex-row justify-between my-2 bg-slate-100 px-3 py-4 rounded-xl">
          <p className="my-0 font-bold text-orange-500 text-xl">Total</p>
          <p className="font-bold text-xl">{Intl.NumberFormat('de-DE').format(totalPrice+45)} Dhs</p>
        </div>
        <div className="flex flex-row justify-center">
          <Link to="/">
            <p class="inline-block mt-6 mr-2 mb-6 px-10 py-3 text-sm font-medium text-orange-500 bg-white border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150">
              Continuer vos achats
            </p>
          </Link>

          <Link to={user===null ? '/compte' : '/commande'}>
            <p class="inline-block mt-6 mb-6 mr-2 px-12 py-3 text-sm font-bold font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150">
              Commander
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
