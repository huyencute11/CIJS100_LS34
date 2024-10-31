import React from 'react'
import { FaStar } from 'react-icons/fa';

const DetailProduct = () => {
    const dataDetail = {
        id: 1,
        name: "Granola siêu hạt ăn kiêng 15% yến mạch",
        desc: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
        price: 75000,
        image:
            "https://s3-alpha-sig.figma.com/img/4d7f/9b27/bc5102b129c443e15c6c1e76d82104af?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hBq4pwHwS6el9Lrhaso61YxwcHROEapLRpHaymdQEc0f5vpcQ-fgDeldnHmfBwIn3Y8uk-agIXKmd-997uBYRoQvZKOGQgEdfuJOg4PCM5QMdtp46RRryICBusiDuvV5hjH8EANcVFhMcaL0LyM9Nya82pkrs~pie~RBzVRQXvYApw1QJfA9Qln7PUUOVurxWDHULk5Lc~Muc0rX4XPfaaFtRwm1pHwaAp922yGOyEeHoe~1KcyCY4EuCSb~GVEyoVr9B3EXcmIg39c5xKMxhfXjnByuYK8pzJK7HTZYZatcsgbEROF7wkiupbOlCaTx5tQw4dzATBHoJ8LNii1lSw__",
        discount: "99%",
        rating: 4,
        category: 'Nhỏ',
        status: 'Đang bán'
    }

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
        <div>
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
                    {/* <div> */}
                    {dataDetail?.date && <p>Ngày thêm: {dataDetail?.date}</p>}
                    {/* </div> */}
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
                                    className={`${dataDetail.category === item ? "bg-[#cdcdcd]" : "bg-[red]"
                                        }`}
                                >
                                    {item}
                                </Button>
                            );
                        })}
                    </div>
                    {/* List notes */}
                    <div>
                        <button>Thêm ghi chú</button>
                        <p>Ghi chú</p>
                        {/* nếu notes rỗng thì hiện ra 1 cái nut add note */}
                        {/* {dataDetail?.notes?.map((note, index) => {
                <textarea rows={4} cols={4} key={1}>textttt</textarea>;
              })} */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct