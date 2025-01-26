import React from "react";
import { Data } from "./Components/Data";
import ProductCard from "./Screens/ProductCards";
import SingleProduct from "./Screens/SingleProduct";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {Data.map((e,i) => (
          <ProductCard key={e.id} title={e.title} desc={e.description} imgSrc={e.image}/>
        ))}

    <Routes>
        <Route
          path="/"
          element={
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <ProductCard />
              <ProductCard />
            </div>
          }
        />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
