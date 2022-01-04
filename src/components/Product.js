import React from "react";
import "../style.css";
import ProductDes from "./ProductDes";

const Product = ({ data }) => {
  return (
    <div className="card">
      <div className="content">
        <h2>{data.title}</h2>
        {data.items.map((item) => {
          return <ProductDes key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default Product;
