import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <img className="product-img" src={item?.img} />
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
