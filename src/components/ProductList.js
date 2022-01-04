import React from "react";
import "../style.css";
import Product from "./Product";
const ProductList = ({ datas }) => {
  return (
    <div>
      <div className="lists">
        {datas.map((data) => {
          return <Product key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
