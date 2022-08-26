import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import ProductDetails from "../component/ProductDetailsPage/ProductDetails";
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
      </div>
      .
    </>
  );
};

export default ProductDetailsPage;
