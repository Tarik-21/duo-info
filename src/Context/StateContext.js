import React, { createContext, useContext, useState, useEffect } from "react";
import { client } from "../client";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const Context = createContext();

export const StateContext = ({ children }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    //getAllProdcucts
    if (products.length === 0) {
      const queryProducts =
        '*[_type=="products"]{_id,title,price,slug,subDescription,description,images,reduction,category->,subCategory->,caracteristiques,stock,topvente}';
      client.fetch(queryProducts).then((data) => {
        setProducts(data);
        setLoading(false)
      });
    }

    if (user === null) {
      const localDataUser = localStorage.getItem("user");
      if (localDataUser !== null) {
        setUser(JSON.parse(localDataUser));
      }
    }

    if (cartItems.length === 0) {
      const localDataCart = localStorage.getItem("cartItems");
      const localDataTotalQuantities = localStorage.getItem("totalQuantities");
      const localDataTotalPrice = localStorage.getItem("totalPrice");
      if (localDataCart !== null) {
        setCartItems(JSON.parse(localDataCart));
      }
      if (localDataTotalQuantities !== null) {
        setTotalQuantities(parseInt(localDataTotalQuantities));
      }
      if (localDataTotalPrice !== null) {
        setTotalPrice(parseInt(localDataTotalPrice));
      }
    } else {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      localStorage.setItem("totalQuantities", totalQuantities);
      localStorage.setItem("totalPrice", totalPrice);
    }
  }, [cartItems, totalQuantities, totalPrice, user]);

  let foundProduct;

  const connectUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const deconnectUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  const viderCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    localStorage.removeItem("cartItems");
    localStorage.removeItem("totalQuantities");
    localStorage.removeItem("totalPrice");
  };
  const onAdd = (product, quantity) => {
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    const existingCartProductIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );

    const existingCartProduct = cartItems[existingCartProductIndex];

    let updatedCart;

    if (existingCartProduct) {
      const updatedProduct = {
        ...existingCartProduct,
        quantity: existingCartProduct.quantity + quantity,
      };

      updatedCart = [...cartItems];
      updatedCart[existingCartProductIndex] = updatedProduct;
      setCartItems(updatedCart);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    toast.success(`${quantity} ${product.title} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    if (cartItems.length === 1) {
      localStorage.clear();
    }

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);

    toast.error(` ${product.title} est supprimé.`);
  };

  const incQuantity = (product) => {
    const foundProductIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );
    const foundProduct = cartItems[foundProductIndex];

    const updatedProduct = {
      ...foundProduct,
      quantity: foundProduct.quantity + 1,
    };

    let updatedCart = [...cartItems];
    updatedCart[foundProductIndex] = updatedProduct;
    setCartItems(updatedCart);

    setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
  };

  const decQuantity = (product) => {
    const foundProductIndex = cartItems.findIndex(
      (item) => item._id === product._id
    );
    const foundProduct = cartItems[foundProductIndex];

    if (foundProduct.quantity > 1) {
      const updatedProduct = {
        ...foundProduct,
        quantity: foundProduct.quantity - 1,
      };

      let updatedCart = [...cartItems];
      updatedCart[foundProductIndex] = updatedProduct;
      setCartItems(updatedCart);
      setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);

      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    }
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,
        onAdd,
        onRemove,
        incQuantity,
        decQuantity,
        connectUser,
        user,
        setUser,
        deconnectUser,
        viderCart,
        products,
        setProducts,
        loading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
