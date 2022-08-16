import React from "react";
import { useStateContext } from "../Context/StateContext";
import CartTable from "../component/CartPage/CartTable";
import TotalCart from "../component/CartPage/TotalCart";
import CartEmpty from "../component/CartPage/CartEmpty";

const CartPage = () => {
  const { cartItems } = useStateContext();
  return (
    <div className="w-4/5 mx-auto my-3">
      {cartItems.length >= 1 && (
        <>
          <CartTable />
          <div className="flex flex-row justify-end">
            <TotalCart />
          </div>
        </>
      )}
      {cartItems.length === 0 && <CartEmpty />}
    </div>
  );
};

export default CartPage;
