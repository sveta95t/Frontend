import React from "react";
import { Link } from 'react-router-dom'
import CartForm from "./CartForm";
import { useCart } from "react-use-cart";

const URLIMAGE = 'https://backend-6ex0.onrender.com'; 

function Cart() {
  const {
    isEmpty,
    totalItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart
  } = useCart();

  if (isEmpty) return(
    <>
      <div className="Cart__Nav-btn">
        <div className='cart-buttons'>
           <h3 className="Cart__all-categories-h3">Shopping cart</h3>

            <div className='Cart__all-line'></div>
            <Link className='pages-button' to={"/AllProducts"}>Back to the store</Link>
          </div>
          <div className="ContinueShopping">
          <p>Looks like you have no items in your basket currently.</p>
          <Link className="ContinueShopping-btn" to={"/AllProducts"}>Continue Shopping</Link>
          </div>

      </div>
      
    </>
  );

  return (
    <>
      <div className="Cart__Nav-btn">
        <div className='cart-buttons'>
           <h3 className="Cart__all-categories-h3">Shopping cart</h3>

            <div className='Cart__all-line'></div>
            <Link className='pages-button' to={"/AllProducts"}>Back to the store</Link>
          </div>

      </div>
      <div className="cart">
        
        <ul className="cart-list">
      
          {items.map((item) => (
            <li className="cart-items" key={item.id}>
              <img className='cart-img'  src={`${URLIMAGE}${item.image}`}  alt="" />
              <div className="cart-itemDesc">
              <h2 className="cart-title">{item.title}</h2>
              <div className='btn-group'>
                
                <div class="number">
                  <button 
                    class="number-minus" 
                    type="button" 
                    onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();"  
                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  >-</button>

                    <input min="0" value={item.quantity} type="number" readonly />

                  <button 
                    class="number-plus" 
                    type="button" 
                    onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();" 
                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                  >+</button>
                </div>

                {item.discont_price ? (
                  <div className='product-prices'>
                    <p className='price'>${item.discont_price}</p>
                    <p className='old-price'>${item.price}</p>
                  </div>
                ) : (
                  <p className='price'>${item.price}</p>
                )}

              </div>
              </div>
              <button className="card-btn" onClick={() => removeItem(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
        <CartForm totalItems={ totalItems } cartTotal={cartTotal}  emptyCart={emptyCart} />
        
      </div>
    </>
  );
}

export default Cart;