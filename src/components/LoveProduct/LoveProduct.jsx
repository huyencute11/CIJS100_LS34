import React from 'react'
import './LoveProduct.css'
import { BiSearch, BiSolidDetail } from 'react-icons/bi'

const LoveProduct = () => {
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
                <select defaultValue={'0'} className='select-item'>
                    <option value='0'>Trạng thái</option>
                    <option value='1'>Đang bán</option>
                    <option value='2'>Hết hàng</option>
                    <option value='3'>Ngưng bán</option>
                </select>
                <select defaultValue='0' className='select-item'>
                    <option value='0'>Danh mục</option>
                    <option value='1'>Rượu</option>
                    <option value='2'>Hạt</option>
                    <option value='3'>Hoa quả</option>
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