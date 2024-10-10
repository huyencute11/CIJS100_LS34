import  { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ContentProduct.css";
import { BiPlus } from "react-icons/bi";
import { dataProducts } from "../../MockData";
import PaginationComp from "../Pagination";


const ContentProduct = () => {

  return (
    <>
      <div className="">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Quà tặng</h1>
          <button
            style={{
              backgroundColor: "red",
              width: "100px",
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Tạo
            <BiPlus />
          </button>
        </div>

        <div className="list-content">
          {dataProducts.map((product, index) => {
            return <ProductItem key={index} product={product} />;
          })}
        </div>
        <PaginationComp />
      </div>
      
    </>
  );
};

export default ContentProduct;
