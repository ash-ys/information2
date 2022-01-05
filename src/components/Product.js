import React from "react";
import "../App.css";
import ProductDes from "./ProductDes";

const Product = ({ data }) => {
  return (
    <div className="card">
        <h2>{data.title}</h2>
        {data.items.map((item) => {
          return <ProductDes key={item.id} item={item} />;
        })}
    </div>
  );
};
export default Product;
