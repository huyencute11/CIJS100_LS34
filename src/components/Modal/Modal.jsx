import React from "react";
import ReactDOM from "react-dom";
import { BiStar } from "react-icons/bi";

const CreateStar = () => {
  const star = [];
  for (let i = 0; i < 5; i++) {
    star.push(<BiStar />);
  }
  return star;
};
let listCategory = ["Nhỏ", "Vừa", "Lớn"];

let category = "Nhỏ"

const Modal = () => (
  <>
    <div className="modal-overlay" />
    <div
      className="modal-wrapper"
      aria-modal
      aria-hidden
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal">
        <div className="modal-header">
          <button
            type="button"
            className="modal-close-button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          {/* <h2>Modal Title</h2>
          <p>Modal Content</p> */}
          <div style={{ display: 'flex' }}>
            <div>
              <img
                src="https://s3-alpha-sig.figma.com/img/4d7f/9b27/bc5102b129c443e15c6c1e76d82104af?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBq4pwHwS6el9Lrhaso61YxwcHROEapLRpHaymdQEc0f5vpcQ-fgDeldnHmfBwIn3Y8uk-agIXKmd-997uBYRoQvZKOGQgEdfuJOg4PCM5QMdtp46RRryICBusiDuvV5hjH8EANcVFhMcaL0LyM9Nya82pkrs~pie~RBzVRQXvYApw1QJfA9Qln7PUUOVurxWDHULk5Lc~Muc0rX4XPfaaFtRwm1pHwaAp922yGOyEeHoe~1KcyCY4EuCSb~GVEyoVr9B3EXcmIg39c5xKMxhfXjnByuYK8pzJK7HTZYZatcsgbEROF7wkiupbOlCaTx5tQw4dzATBHoJ8LNii1lSw__"
                alt="product"
                className="modal-image"
                style={{ width: '300px', height: '300px' }}
              />
            </div>
            <div>
              <p>Hạt thập cẩm, hũ trang trí</p>
              <p>Giá: 100.000đ</p>
              {CreateStar()}
              <p>Phân loại</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                {
                  listCategory.map((item, index) => {
                    return <button key={index} style={{ backgroundColor: category === item ? 'red' : 'white' }}>{item}</button>
                  })
                }
              </div>
            </div>
          </div>

        </div>
        <p>{/* {productDetail.name} */}</p>
      </div>
    </div>
  </>
);

export default Modal;
