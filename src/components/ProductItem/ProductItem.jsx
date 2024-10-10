import { BiCartAdd } from 'react-icons/bi'
import ModalComp from '../Modal/Modal'
import { useState } from 'react';
// import { FaCartPlus } from 'react-icons/bi'


const ProductItem = (props) => {
    const { product } = props
    const [isShowDetail, setIsShowDetail] = useState(false);

    const handleShowModalDetail = ()=>{
        console.log('show modal detail')
        setIsShowDetail(true)
    }
    const handleCloseModalDetail = ()=>{
        setIsShowDetail(false)
    }
    // const handleShowDetail = ()=>{
    //     alert('Giá tiền của sản phẩm '+product.name+' là: '+product.price)
    // }
   
    return (
        <>
        <div className='' onClick={handleShowModalDetail} style={{cursor: 'pointer'}}>
            <img src={product.image} alt="" style={{
                borderRadius: '10px',
                width: '200px',
                height: '200px',
                objectFit: 'cover'
            }} />
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
            }}>
                <span>{product.name}</span>
                <span>
                    <BiCartAdd />
                </span>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 0',
            }}>
                <span>{product.price}</span>
                <span>{product.discount}</span>
            </div>
        </div>
        <ModalComp isModalOpen={isShowDetail} handleCancel={handleCloseModalDetail} dataDetail={product}/>
        </>
    )
}

export default ProductItem