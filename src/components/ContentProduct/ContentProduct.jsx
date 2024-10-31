import { useContext, useEffect, useState } from "react";
import ProductItem from "../ProductItem/ProductItem";
import "./ContentProduct.css";
import { BiPlus } from "react-icons/bi";
// import { dataProducts } from "../../MockData";
import PaginationComp from "../Pagination";
import ModalAdd from "../Modal/ModalAdd";
import { StoreContext } from "../../store";

const ContentProduct = () => {
  // const store = useContext(StoreContext);
  // console.log("🚀 ~ ContentProduct ~ store:", store)
  const [dataProduct, setDataProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  const [isShowModalAddProduct, setIsShowModalAddProduct] = useState(false);

  const handleOpenModalAddProduct = () => {
    setIsShowModalAddProduct(true)
  }
  const handleCloseModalAddProduct = () => {
    setIsShowModalAddProduct(false)
  }

  // const handleAddProduct = (product) => {
  //   setDataProducts([...dataProduct, product])
  // }

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://6723745b493fac3cf24aee8b.mockapi.io/api/v1/products/products");
      const data = await response.json();
      // setTimeout(() => {
      setIsLoading(false);
      setDataProducts(data);
      // }, 2000);

    }
    catch (error) {
      setIsLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (isError) {
    return <div>Error: </div>
  }
  //Thực hiện tạo mới và lưu trữ trên mockapi, sẽ cần có loading trong khoảng thời gian chờ lưu
  const handleAddProduct = (product) => {
    setIsLoading(true);
    try {
      fetch("https://6723745b493fac3cf24aee8b.mockapi.io/api/v1/products/products", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      }).then(response => response.json())
        .then(data => {
          setIsLoading(false);
          getData()
          setIsShowModalAddProduct(false);
        });
    } catch (error) {
      console.log("🚀 ~ handleAddProduct ~ error", error
      )
    }
  };
  // xóa sản phẩm
  const handleDeleteProduct = (id) => {
    setIsLoading(true);
    try {
      fetch(`https://6723745b493fac3cf24aee8b.mockapi.io/api/v1/products/products/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(data => {
          setIsLoading(false);
          getData()
        });
    } catch (error) {
      console.log("🚀 ~ handleAddProduct ~ error", error
      )
    }
  };

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {
        dataProduct?.length > 0 &&
        (
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
                {dataProduct?.map((product, index) => {
                  return <ProductItem key={index} product={product} />;
                })}
              </div>
              <PaginationComp />
            </div>
            {isShowModalAddProduct && <ModalAdd onCloseModal={handleCloseModalAddProduct} handleAddProduct={handleAddProduct} />}
          </div>
        )
      }
    </>
  );
};

export default ContentProduct;
