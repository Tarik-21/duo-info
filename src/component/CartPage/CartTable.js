import React from "react";
import { useStateContext } from "../../Context/StateContext";
import { urlFor } from "../../client";
import { AiFillDelete } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaMinusCircle } from "react-icons/fa";


const CartTable = () => {
  const {incQuantity,decQuantity,onRemove, cartItems} = useStateContext();
  const ProductRow = ({product}) => (
    <tr className="border-b-2 border-zinc-200">
      <td className="py-4 px-4 text-base font-bold flex flex-row items-center leading-snug  ">
        <AiFillDelete
          size={20}
          className="hover:text-orange-500 cursor-pointer mr-2"
          onClick={()=>onRemove(product)}

        />
        <div className="w-1/3 border-2 border-border-zinc-200 rounded-xl flex flex-row justify-center items-center mr-2">
          <img src={urlFor(product.images[0])} alt="image" className="object-contain w-3/4 h-20" />
        </div>
        {product.title}
      </td>
      <td className="py-2 px-4 text-base font-bold text-orange-500 align-center text-center leading-snug ">
        <div>{Intl.NumberFormat('de-DE').format(product.price)} Dhs</div>
      </td>
      <td className="py-2 px-4 text-sm align-top leading-snug flex flex-row justify-center items-center ">
        <div className="flex flex-row items-center">
          <BsPlusCircleFill className="text-orange-500 text-xl mr-2 cursor-pointer" onClick={()=>incQuantity(product)}  />
          <span className="mr-2 font-bold">{product.quantity}</span>
          <FaMinusCircle className="text-orange-500 text-xl cursor-pointer" onClick={()=>decQuantity(product)}/>
        </div>
      </td>
      <td className="py-2 px-4 text-base font-bold text-orange-500 text-center align-center leading-snug ">
        <div>{Intl.NumberFormat('de-DE').format(product.price * product.quantity)} Dhs</div>
      </td>
    </tr>
  );
  return (
    <div className=" w-full mt-2">
      <table className="table-fixed my-4 xt-my-auto w-full">
        <thead>
          <tr className="border-b-2 border-zinc-200 bg-orange-500 text-white">
            <th className="py-3 px-4 text-sm w-2/5 align-top font-medium leading-snug tracking-wider uppercase text-center ">
              Produit
            </th>
            <th className="py-3 px-4 text-sm align-top font-medium leading-snug tracking-wider uppercase text-center  ">
              Prix
            </th>
            <th className="py-3 px-4 text-sm align-top font-medium leading-snug tracking-wider uppercase text-center  ">
              Quantité
            </th>
            <th className="py-3 px-4 text-sm align-top font-medium leading-snug tracking-wider uppercase text-center ">
              Sous-total
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length >=1 && cartItems.map((product) => (
            <ProductRow
             product={product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
