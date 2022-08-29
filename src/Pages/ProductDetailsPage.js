import React, { useEffect, useState } from "react";
import { client } from "../client";
import { useLocation,useParams } from "react-router-dom";

import ProductDetails from "../component/ProductDetailsPage/ProductDetails";
const ProductDetailsPage = () => {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    if(location.state === null){
      console.log(params.slug)

      const queryProduct =
        `*[_type=="products" && slug.current=="${params.slug}"]{_id,title,price,slug,subDescription,description,images,reduction,category->,subCategory->,caracteristiques,stock,topvente}`;
      client.fetch(queryProduct).then((data) => {
        setProduct(data[0])
      });

    }else{
      setProduct(location.state.produit)
    }
  }, [product]);

  return (
    <>
      <div className="w-4/5 mx-auto">
        {product !==  null && <ProductDetails product={product} />}
      </div>
      .
    </>
  );
};

export default ProductDetailsPage;
