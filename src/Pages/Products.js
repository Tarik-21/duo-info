import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ProductList from "../component/ProductList";
import Filter from "../component/ProductsPage/Filter";
import { client } from "../client";

import ProductsPagination from "../component/ProductsPage/ProductsPagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [valueFilter, setValueFilter] = useState([]);
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [subCategory, setSubCategory] = useState();
  const location = useLocation();

  const FilterHandler = (value) => {
    setFilterProducts(
      products.filter(
        (product) => product.price >= value[0] && product.price <= value[1]
      )
    );
  };

  useEffect(() => {
    const queryproducts = `*[_type == "products" && subCategory->nom == "${location.state.subCategory}"]`;
    client.fetch(queryproducts).then((data) => {
      setProducts(data);
      setFilterProducts(data)
      setMax(Math.max(...data.map((o) => o.price)));
      setMin(Math.min(...data.map((o) => o.price)));
      setValueFilter([
        Math.min(...data.map((o) => o.price)),
        Math.max(...data.map((o) => o.price)),
      ]);
    });
    setSubCategory(location.state.subCategory);
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
          <ProductsPagination products={filterProducts} subCategory={subCategory} />
        </div>
      </div>
    </>
  );
};

export default Products;
