import React from "react";
import { useStateContext } from "../../Context/StateContext";

const CommandeCard = () => {
  const { cartItems, totalPrice } = useStateContext();
  return (
    <div className="w-1/3 bg-zinc-100 py-5 px-4 rounded-2xl">
      <p className="text-2xl w-full">Votre commande</p>
      <div className="flex flex-row mt-2">
        <span class="inline w-24 h-1 bg-orange-500"></span>
        <span class="inline-block w-full h-1 bg-slate-200"></span>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex flex-row justify-between font-bold">
          <p>Produit</p>
          <p>Sous-total</p>
        </div>
        <span class="inline-block w-full h-0.5 bg-zinc-200"></span>
        <div className="my-2">
          {cartItems.map((product, index) => (
            <div className="flex flex-row justify-between text-sm my-1" key={index}>
              <p className="mb-0">
                {product.title}
                <span className="font-bold"> x{product.quantity}</span>
              </p>
              <p>{Intl.NumberFormat('de-DE').format(product.price * product.quantity)} Dhs</p>
            </div>
          ))}
        </div>

        <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
        <div className="flex flex-row justify-between text-sm my-2">
          <p className="mb-0 font-bold">Sous-total</p>
          <p>{Intl.NumberFormat('de-DE').format(totalPrice)} Dhs</p>
        </div>
        <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
        <div className="my-2">
          <div className="font-bold">Expédition</div>
          <div className="flex flex-row justify-between text-sm my-1">
            <p className="mb-0 ml-1">Frais de service:</p>
            <p>{Intl.NumberFormat('de-DE').format(45)} Dhs</p>
          </div>
        </div>

        <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
        <div className="flex flex-row justify-between font-bold my-2">
          <p className="mb-0 ml-1">Total</p>
          <p>{Intl.NumberFormat('de-DE').format(totalPrice+45)} Dhs</p>
        </div>
        <span class="inline-block w-full h-0.5 bg-zinc-200 mt-1"></span>
        <a
          class="inline-block mt-6 mb-6 px-12 py-3 text-center text-base font-medium text-white bg-orange-500 border border-orange-500 rounded-full active:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 focus:outline-none duration-150"
          href="/download"
        >
          Commander
        </a>
      </div>
    </div>
  );
};

export default CommandeCard;
