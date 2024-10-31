import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const { productId } = useParams()
    return (
        <div>DetailPage</div>
    )
}

export default DetailPage