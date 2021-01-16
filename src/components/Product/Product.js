import React from 'react'
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import './Product.css'

const Product = ({ id, title, image, price, rating }) => {
    return (
        <div className="product">
            <dv className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><StarOutlineIcon className="product__star" /></p>
                    ))}
                </div>
            </dv>  
            <img src={image} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
