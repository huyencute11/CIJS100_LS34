import React from 'react'

const Input = ({ name, value, handleChange }) => {
    return (
        <div style={{ padding: '10px' }}>
            <input type="text" value={value} name={name} onChange={handleChange} style={{
                padding: '5px',
                width: '50%',
                borderRadius: '5px',
            }} />
            <br />
        </div>
    )
}

export default Input