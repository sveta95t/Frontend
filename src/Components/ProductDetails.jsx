import React from 'react';
import { useCart } from "react-use-cart";
import { useState } from 'react';


const URLIMAGE = 'https://backend-6ex0.onrender.com';

function ProductDetails({ product }) {
  const { addItem } = useCart();
  const [ count, setCount ] = useState(1);

  return (
    <div className='ProductDetails'>
      {product.discount_price && (
        <div className='discount'>
          -{Math.round(((product.price - product.discount_price) / product.price) * 100)}%
        </div>
      )}

      <img
        className='ProductDetails-img'
        src={`${URLIMAGE}${product.image}`}
        alt={product.title}
      />
      <div className='ProductDetails-desc'>
        <p className='ProductDetails-title'>{product.title}</p>
        {product.discount_price ? (
          <div className='ProductDetails-prices'>
            <p className='ProductDetails-price'>${product.discount_price}</p>
            <p className='old-price'>${product.price}</p>
          </div>
        ) : (
          <p className='ProductDetails-price'>${product.price}</p>
        )}
        <div className='btn-group'>
          <div class="number">
            <button 
            class="number-minus" 
            type="button"
            onClick={() => setCount(count - 1)}
            >-</button>

            <input min="1" value={count} type="number" readonly />
            
            <button 
            class="number-plus" 
            type="button"
            onClick={() => setCount(count + 1)}
            >+</button>
          </div>
          <button className='add-card-btn' onClick={() => addItem(product)}>Add to cart</button>
        </div>
        

        <h2 className='ProductDetails-descTitle'>Description</h2>
          <p className='ProductDetails-descText'>{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
