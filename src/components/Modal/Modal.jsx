import { Button, Modal } from "antd";
import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const ModalComp = ({ isModalOpen, handleCancel, dataDetail }) => {
  const CreateStar = () => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < dataDetail.rating) star.push(<FaStar color="#ffc403" />);
      else star.push(<FaStar color="" />);
    }
    return star;
  };
  let listCategory = ["Nhỏ", "Vừa", "Lớn"];

  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        footer={
          <Button type="primary" onClick={handleCancel}>
            Close
          </Button>
        }
        onCancel={handleCancel}
        width={800}
      >
        <div style={{ display: "flex", gap: "50px" }}>
          <div>
            <img
              src={dataDetail.image}
              alt="product"
              className="modal-image"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div>
            <p>Hạt thập cẩm, hũ trang trí</p>
            <span className="relative">
              <p>Giá: {dataDetail.price}</p>
              <p className="absolute">{dataDetail.discount}</p>
            </span>
            {CreateStar()}
            <p>Phân loại</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {listCategory.map((item, index) => {
                return (
                  // <button
                  //   key={index}

                  //   style={{
                  //     backgroundColor:
                  //       dataDetail.category === item ? "#cdcdcd" : "white",
                  //   }}
                  // >
                  //   {item}
                  // </button>
                  <Button
                    key={index}
                    type="default"
                    background="#fff"
                    className={`${
                      dataDetail.category === item ? "bg-[#cdcdcd]" : ""
                    }`}
                  >
                    {item}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalComp;
