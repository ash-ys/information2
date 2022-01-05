import React from "react";

const ProductDes = ({ item }) => {
  console.log(item);
  return (
    <div className="desc">
      <img src={item.imageUrl} />
      <h3>{item.name}</h3>
      <h4>$ {item.price}</h4>
    </div>
  );
};

export default ProductDes;
