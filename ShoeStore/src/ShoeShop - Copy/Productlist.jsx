import React from "react";
import ShoeCard from "./ShoeCard";

const ProductList = ({ productsData, setStateModal }) => {
  return (
    <div className="container mt-5">
        <div className="row g-4">
      {productsData.map((item) => (
        <div className="col-4 my-2" key={item.id}>
          <ShoeCard detail={item} onViewDetail={setStateModal} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
