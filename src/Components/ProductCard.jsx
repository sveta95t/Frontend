import React from 'react';
import { Link } from 'react-router-dom'
import { useCart } from "react-use-cart";

const URLIMAGE = 'https://backend-6ex0.onrender.com'; 

function ProductCard({ product }) {  
  const { addItem } = useCart();

  return (

    <div className='my-product'>

      <div>
        {product.discont_price ? (
          <div className='discount'>
              {product.discont_price ? (
                "-" + Math.round(((product.price - product.discont_price) / product.price) * 100) + "%"
              ) : ""}
          </div>
        ) : ""}
      </div>

      <button className='add-card-b'  onClick={() => addItem(product)}>Add to cart</button>
      
      <Link className='my-menu-nav' to={`/Product/${product.id}`}>
      <img 
        className='product-img' 
        src={`${URLIMAGE}${product.image}`} 
        alt={product.title}
      />

      <p className='product-title'>{product.title}</p>
      </Link>

      {product.discont_price ? (
        <div className='product-prices'>
          <p className='price'>${product.discont_price}</p>
          <p className='old-price'>${product.price}</p>
        </div>
      ) : (
        <p className='price'>${product.price}</p>
      )}
    </div>
  )
}

export default ProductCard;