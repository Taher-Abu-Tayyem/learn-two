import React from "react";
import ProductsData from "./ProductsData";
import Proudct from "./Product";
import "./Productslist.css";
const ProductsList = () => {
 const products =ProductsData.map((product)=>{
    return   product.price>100 ? (
    <Proudct key={product.id} product={product}/>): null;
    
 });
  return <div className="products-list">
  <div className="row"> 
  {products}
  </div>
  </div>;
};

export default ProductsList;
