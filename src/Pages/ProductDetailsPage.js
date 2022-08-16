import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Breadcrumbs from "../component/ProductDetailsPage/Breadcrumbs";
import ProductDetails from "../component/ProductDetailsPage/ProductDetails";
import ProductList from "../component/ProductList";

const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setProduct(location.state.produit);
  }, [product]);

  return (
    <>
      <div className="w-4/5 mx-auto">
        {product != null && <ProductDetails product={product} />}
        {/*        <ProductList title="Produit similaires" slidesToShow={3} />
         */}{" "}
      </div>
    </>
  );
};

export default ProductDetailsPage;
