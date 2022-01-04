import React from "react";

const ProductDes = ({ item }) => {
  console.log(item);
  return (
    <div>
      <img src={item.imageUrl} />
      <h2>{item.name}</h2>
      <h2>{item.price}</h2>
    </div>
  );
};

export default ProductDes;
