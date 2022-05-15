import React from 'react';
import { useNavigate } from "react-router-dom"

const ProductCard = ({item}) => {
    const navigate = useNavigate();

    const showDetail = function() {
        navigate(`/product/${item.id}`);
    }

    return <div className="card" onClick = { showDetail }>
        <img src={item?.img}/>
        <div>{item?.choice == true?"Conscious choice":""}</div>
        <div>{item?.title}</div>
        <div>W{item?.price}</div>
        <div>{item?.new == true?"신제품":""}</div>
    </div>;
}

export default ProductCard;