import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <h1 style={{
                color: '#e6656e'
            }}>Yêu thích ngay</h1>
            <div style={{
                display: 'flex',
                gap: '10px',
            }}>
                <img src="/images/introduce.png" alt="" style={{
                    borderRadius: '10px',
                    // width: '100%',
                    height: '300px',
                    objectFit: 'cover'
                }} />
                <span style={{
                    color: 'gray',
                    fontSize: '20px'
                }}>Thêm ngay vào mục yêu thích để nhận thông báo mỗi khi sản phẩm có ưu đãi</span>
            </div>
        </div>
    )
}

export default Header

