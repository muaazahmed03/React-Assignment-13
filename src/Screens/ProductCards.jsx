import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ title, imgSrc, desc }) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    navigate(`/product/${title}`); // Use the title as a unique identifier
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
      }}
    >
      <img
        src={imgSrc}
        alt="pic"
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button
        onClick={handleViewClick}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View
      </button>
    </div>
  );
}

export default ProductCard;
