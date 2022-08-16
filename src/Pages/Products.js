import React,{useEffect,useState} from "react";
import { useLocation } from "react-router-dom";

import ProductList from "../component/ProductList";
import Filter from "../component/ProductsPage/Filter";
import { client } from "../client";

import ProductsPagination from "../component/ProductsPage/ProductsPagination";

const Products = () => {
  const [products,setProducts] = useState([])
  const [subCategory,setSubCategory] = useState();
  const location = useLocation();

  useEffect(()=>{
    const queryproducts = `*[_type == "products" && subCategory->nom == "${location.state.subCategory}"]`;
    client.fetch(queryproducts).then((data) => {
      setProducts(data);
      console.log(data)
    });
    setSubCategory(location.state.subCategory)

  },[location])
  return (
    <>
      <div className="w-4/5 mx-auto">
{/*         <ProductList title="Top ventes"  slidesToShow={4} />
 */}        <div className="flex flex-row">
          <Filter />
          <ProductsPagination products={products} subCategory={subCategory} />
        </div>
      </div>
    </>
  );
};

export default Products;
