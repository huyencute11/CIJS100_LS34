import { useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ContentProduct.css";
import { BiPlus } from "react-icons/bi";
// import { dataProducts } from "../../MockData";
import PaginationComp from "../Pagination";
import ModalAdd from "../Modal/ModalAdd";

const ContentProduct = () => {
  //b1: lấy data từ localStogare
  let dataFromLocalStorage = localStorage.getItem('dataProducts')
  // b2: Xét điều kiện: nếu như local có dữ liệu thì chuyển về dạng JSON
  if (dataFromLocalStorage) {
    dataFromLocalStorage = JSON.parse(dataFromLocalStorage)
  } else {
    dataFromLocalStorage = []
  }
  // set để lưu data trong localStogare
  //b3: tạo 1 state để lưu data product 
  const [dataProducts, setDataProducts] = useState(dataFromLocalStorage);
  //b4: lấy data từ stage lưu vào localStogare 
  localStorage.setItem('dataProducts', JSON.stringify(dataProducts))

  const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false);
  const handleOpenModalAddProduct = () => {
    setIsShowModalAddProduct(true)
  }
  const handleCloseModalAddProduct = () => {
    setIsShowModalAddProduct(false)
  }

  const handleAddProduct = (product) => {
    setDataProducts([...dataProducts, product])
  }

  return (
    <div style={{
      position: 'relative'
    }}>
      <div >
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
            onClick={handleOpenModalAddProduct}
          >
            Tạo
            <BiPlus />
          </button>
        </div>

        <div className="list-content">
          {dataProducts?.sort((a, b) => a.price - b.price).map((product, index) => {
            return <ProductItem key={index} product={product} />;
          })}
        </div>
        <PaginationComp />
      </div>
      {isShowModalAddProduct && <ModalAdd onCloseModal={handleCloseModalAddProduct} handleAddProduct={handleAddProduct} />}
    </div>
  );
};

export default ContentProduct;
