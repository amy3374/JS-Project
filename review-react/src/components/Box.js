import React from "react";

const Box = ({ title, item }) => {
  return (
    <div className="box">
      <h1>{title}</h1>
      <img width={400} src={item?.img} />
      <h3>win</h3>
    </div>
  );
};

export default Box;
