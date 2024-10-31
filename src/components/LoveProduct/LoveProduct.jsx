import React, { useContext } from 'react'
import './LoveProduct.css'
import { BiSearch, BiSolidDetail } from 'react-icons/bi'
import { StoreContext } from '../../store';
import { dataProducts } from '../../MockData';

const LoveProduct = () => {
    const { products, setProducts } = useContext(StoreContext);
    // loc data theo trang thai
    const handleFilterByStatus = (e) => {
        let status = e.target.value;
        console.log("🚀 ~ handleFilterByStatus ~ status:", status)
        let newProducts = dataProducts.filter(product => {
            if (status === '0') return true;
            if (status === '1') return product.status === 'Đang bán';
            if (status === '2') return product.status === 'Hết hàng';
            if (status === '3') return product.status === 'Ngưng bán';
        })
        setProducts(newProducts);
    }
    const handleFilterByCategory = (e) => {
        let category = e.target.value;
        let newProducts = dataProducts.filter(product => {
            if (category === '0') return true;
            if (category === '1') return product.category === 'Nhỏ';
            if (category === '2') return product.category === 'Vừa';
            if (category === '3') return product.category === 'Lớn';
        })
        setProducts(newProducts);
    }



    return (
        <div>
            <h1 style={{
                color: '#e6656e'
            }}>Mục yêu thích của bạn</h1>
            <div style={{
                border: '1px solid',
                borderRadius: '5px',
                display: 'flex',
                alignItems: 'center',
                width: '50%',

            }}>
                <BiSearch fontSize={30} />
                <input style={{
                    width: '50%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none'

                }} placeholder='Tìm kiếm' />
            </div>
            <div style={{
                display: 'flex',
                gap: '10px',
                marginTop: '10px',
                alignItems: 'center'
            }} className='' >
                <select defaultValue={'0'} className='select-item' onChange={(e) => handleFilterByStatus(e)}>
                    <option value='0'>Trạng thái</option>
                    <option value='1'>Đang bán</option>
                    <option value='2'>Hết hàng</option>
                    <option value='3'>Ngưng bán</option>
                </select>
                <select defaultValue='0' className='select-item' onChange={(e) => handleFilterByCategory(e)}>
                    <option value='0'>Danh mục</option>
                    <option value='1'>Nhỏ</option>
                    <option value='2'>Vừa</option>
                    <option value='3'>Lớn</option>
                </select>
                <select defaultValue={'0'} className='select-item'>
                    <option value='0'>Đã thêm</option>
                    <option value='1'>Gần đây</option>
                    <option value='2'>Mới nhất</option>
                </select>
                <BiSolidDetail fontSize={30} />
            </div>
        </div>
    )
}

export default LoveProduct