import React from "react";
import "../App.css";
import ProductDes from "./ProductDes";

const Product = ({ data }) => {
  return (
      <div>
          <h2 className="title">{data.title}</h2>
    <div className="card">
        
        {data.items.map((item) => {
          return <ProductDes key={item.id} item={item} />;
        })}
    </div>
    </div>
  );
};
export default Product;
