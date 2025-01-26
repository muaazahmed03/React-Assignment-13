import React from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {/* Add more product details here */}
    </div>
  );
};

export default SingleProduct;
