import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SerachInput";
import { useStateContext } from "../Context/StateContext";
import { TopHeader } from "./TopHeader";
import Logo from "../assets/images/logo.png";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";
import DropDownCategories from "./DropDownCategories";

import { client } from "../client";

const NavBar = () => {
  const ref = useRef();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { totalQuantities, user } = useStateContext();

  useEffect(() => {

    //get All categories

    const query =
      '*[_type == "categories"]| order(_createdAt){_id,nom,image,subCategories[]->{nom,slug}}';
    client.fetch(query).then((data) => {
      setCategories(data);
    });


    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isCartOpen && ref.current && !ref.current.contains(e.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isCartOpen]);

  return (
    <>
      <TopHeader />
      <div className="px-24 py-5 flex flex-row items-center justify-between ">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-28" />
        </Link>
        <SearchInput />
        <div className="nav-icons flex flex-row ">
          <p>
            <Link to={user === null ? "/compte" : "/mon-compte"}>
              <FaUserAlt size={24} />
            </Link>
          </p>
          <p
            ref={ref}
            onClick={() => setIsCartOpen((oldState) => !oldState)}
            className="cursor-pointer"
          >
            <FaShoppingCart size={24} />
            <span className="inline-flex items-center justify-center">
              {totalQuantities !== 0 && totalQuantities}
            </span>
            {isCartOpen && <Cart />}
          </p>
        </div>
      </div>
      <DropDownCategories categories={categories} />
    </>
  );
};

export default NavBar;
