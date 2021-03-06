import React from "react";
import "../App.css";
import Product from "./Product";
const ProductList = ({ datas }) => {
  return (
      <div className="lists">
        {datas.map((data) => {
          return <Product key={data.id} data={data} />;
        })}
      </div>
  );
};

export default ProductList;
