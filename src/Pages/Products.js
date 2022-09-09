import React, { useEffect, useState } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useStateContext } from "../Context/StateContext";

import Filter from "../component/ProductsPage/Filter";

import ProductsPagination from "../component/ProductsPage/ProductsPagination";

const Products = () => {
  const { products } = useStateContext();
  const [searchParams] = useSearchParams();
  const [marqueParams] = useSearchParams();
  const [filterProducts, setFilterProducts] = useState([]);
  const [valueFilter, setValueFilter] = useState([]);
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [subCategory, setSubCategory] = useState();
  const location = useLocation();

  const search = searchParams.get("search");
  const marque = searchParams.get("marque");

  const FilterHandler = (value) => {
    if (search === null && marque === null) {
      setFilterProducts(
        products.filter(
          (product) =>
            product.price >= value[0] &&
            product.price <= value[1] &&
            product.subCategory.slug.current ===
              location.state.subCategory.slug.current
        )
      );
    } else if (search !== null && marque === null) {
      setFilterProducts(
        products.filter(
          (product) =>
            product.price >= value[0] &&
            product.price <= value[1] &&
            (product.subCategory.nom
              .toLowerCase()
              .includes(search.toLowerCase()) ||
              product.title.toLowerCase().includes(search.toLowerCase()))
        )
      );
    } else if (search === null && marque !== null) {
      setFilterProducts(
        products.filter(
          (product) =>
            product.price >= value[0] &&
            product.price <= value[1] &&
            product.marque.toLowerCase().includes(marque.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    let filteredProducts;

    if (search === null && marque === null) {
      filteredProducts = products.filter(
        (product) =>
          product.subCategory.slug.current ===
          location.state.subCategory.slug.current
      );
      setSubCategory(location.state.subCategory.nom);
    } else if (search !== null && marque === null) {
      filteredProducts = products.filter(
        (product) =>
          product.subCategory.nom
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          product.title.toLowerCase().includes(search.toLowerCase())
      );
      setSubCategory(search);
    } else if (search === null && marque !== null) {
      filteredProducts = products.filter((product) =>
        product.marque.toLowerCase().includes(marque.toLowerCase())
      );
      setSubCategory(marque);
    }

    setFilterProducts(filteredProducts);
    setMax(Math.max(...filteredProducts.map((o) => o.price)));
    setMin(Math.min(...filteredProducts.map((o) => o.price)));
    setValueFilter([
      Math.min(...filteredProducts.map((o) => o.price)),
      Math.max(...filteredProducts.map((o) => o.price)),
    ]);
  }, [location]);
  return (
    <>
      <div className="w-4/5 mx-auto">
        {/*         <ProductList title="Top ventes"  slidesToShow={4} />
         */}{" "}
        <div className="flex flex-row">
          <Filter
            valueFilter={valueFilter}
            setValueFilter={setValueFilter}
            FilterHandler={FilterHandler}
            min={min}
            max={max}
          />
          <ProductsPagination
            products={filterProducts}
            subCategory={subCategory}
          />
        </div>
      </div>
    </>
  );
};

export default Products;
