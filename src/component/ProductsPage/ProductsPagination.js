import React, { useState, useEffect } from "react";

import Pagination from "@mui/material/Pagination";
import Product from "../Product";

const ProductsPagination = ({ products, subCategory }) => {
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]);
  const options = [
    {
      value: "all",
      text: "Disponibilité",
    },
    {
      value: "asc",
      text: "Du - cher au + cher",
    },
    {
      value: "desc",
      text: "Du + cher au - cher",
    },
  ];
  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    setSelected(event.target.value);
    if (event.target.value === "asc") {
      products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if(event.target.value === "desc") {
      products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const ProductsPerPage = 9;

  const indexOfLastProduct = currentPage * ProductsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - ProductsPerPage;

  const currentProducts = filterProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center w-4/5 mx-auto">
        <div>
          <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
            {subCategory}
          </h2>
        </div>
        <div className="w-full shadow-lg p-10 rounded-xl">
          <p className="font-bold">{filterProducts.length} ARTICLES</p>
          <div className="flex flex-row items-center">
            <p className="mb-0 mr-2 font-semibold	">RESULTATS PAR PAGE : </p>{" "}
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option>9</option>
              <option>18</option>
              <option>27</option>
            </select>
            <p className="mb-0 mr-2 ml-3 font-semibold ">CLASSER PAR : </p>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selected}
              onChange={handleChange}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
        {currentProducts.map((product, index) => (
          <div className="w-1/3 mt-5">
            <Product product={product} />
          </div>
        ))}
        {products.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(products.length / ProductsPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </div>
    </>
  );
};

export default ProductsPagination;
