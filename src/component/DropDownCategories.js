import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

import { urlFor } from "../client";
import {Link} from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DropDownCategories = ({ categories }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [categoryHovring, setCategoryHovring] = useState(null);
  const handleMouseOver = (category) => {
    setIsHovering(true);
    setCategoryHovring(category);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const MenuDetails = ({ category }) => (
    <div
      className="menuDetails"
      onMouseOver={() => {
        handleMouseOver(category);
      }}
      onMouseOut={handleMouseOut}
    >
      <div className="relative w-full h-full shadow-md">
        <div className="absolute top-0 left-0 px-2 pt-3">
          <h2 class="text-2xl font-extrabold tracking-wide uppercase">
            {categoryHovring.nom}
          </h2>
          <span class="inline-block w-20 h-1 bg-orange-500 mb-2"></span>
          <ul className="ml-4  ">
            {categoryHovring.subCategories.map((subCategory, index) => (
              <Link to={`/produits/${subCategory.slug.current}`} state={{subCategory : subCategory}}>
                <li
                  className="ml-4 mb-2  hover:text-orange-500 cursor-pointer"
                  key={index}
                >
                  {subCategory.nom}
                  
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3">
          <img src={urlFor(categoryHovring.image)} alt="image" />
        </div>
      </div>
    </div>
  );
  return (
    <div className="w-4/5 mx-auto ">
      <Menu as="div" className="relative inline-block text-left z-20">
        <div>
          <Menu.Button className="inline-flex justify-start items-center w-full rounded-t-md border border-gray-300  pl-8 pr-28 py-2 bg-orange-500 text-base font-medium text-white">
            <AiOutlineMenu className="mr-2" />
            Nos univers
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {categories.map((category, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      onMouseOver={() => {
                        handleMouseOver(category);
                      }}
                      onMouseOut={handleMouseOut}
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      <div className="flex flex-row justify-between">
                        {category.nom}

                        <IoIosArrowForward />
                      </div>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
        {isHovering && <MenuDetails category={categoryHovring} />}
      </Menu>
    </div>
  );
};

export default DropDownCategories;
