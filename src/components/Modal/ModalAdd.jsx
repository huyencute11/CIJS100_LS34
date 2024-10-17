import React, { useState } from 'react'
import Input from '../Input/Input';

const ModalAdd = ({ onCloseModal, handleAddProduct }) => {
    const [infoProduct, setInfoProduct] = useState({
        name: '', // ten san pham
        price: '', // gia san pham
        discount: '',
        rating: '',
        image: '',
        category: '',
        status: '',
        type: '',
        desc: ''
    })
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // vi du dang thay doi gia tri cho price thi se tuong ung infoProduct.price = value
        infoProduct[name] = value;
        setInfoProduct({
            //spread operator
            ...infoProduct
        });
    }

    const handleSubmitFormAdd = (e) => {
        e.preventDefault()
        // console.log('info product submit----->', infoProduct)
        // Khi mà bấm save thì sẽ gọi hàm handleAddProduct và truyền vào infoProduct
        handleAddProduct(infoProduct)
        onCloseModal()
    }


    return (
        <div style={{ position: 'absolute', width: '800px', top: 0, left: '50%', transform: 'translateX(-50%)', padding: '20px', background: '#e9e9e9cd' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3> Modal Add</h3>
                <span style={{ cursor: 'pointer' }} onClick={onCloseModal} >X</span>
            </div>
            <form onSubmit={handleSubmitFormAdd}>
                Ten san pham: <Input name='name' value={infoProduct.name} handleChange={handleChangeInput} />
                Gia san pham: <Input name='price' value={infoProduct.price} handleChange={handleChangeInput} />
                Gia giam: <Input name='discount' value={infoProduct.discount} handleChange={handleChangeInput} />
                Rating: <Input name='rating' value={infoProduct.rating} handleChange={handleChangeInput} />
                Image: <Input name='image' value={infoProduct.image} handleChange={handleChangeInput} />
                Danh muc: <Input name='category' value={infoProduct.category} handleChange={handleChangeInput} />
                Trang thai: <Input name='status' value={infoProduct.status} handleChange={handleChangeInput} />
                Loai: <Input name='type' value={infoProduct.type} handleChange={handleChangeInput} />
                {/* category: 'Nhỏ', */}
                {/* status: 'Đang bán' */}
                Mo ta: <Input name='desc' value={infoProduct.desc} handleChange={handleChangeInput} />
                <button type='submit'>Luu san pham </button>
            </form>
        </div>
    )
}

export default ModalAdd