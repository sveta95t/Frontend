import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/productsActions';
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';


function Sale() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const error = useSelector((state) => state.error);
    
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    
    
    if (error) {
      return <h1>{error}</h1>;
    }

  return (
    <div>
      <div id='sales'>
        <h3 id='sale-h3'>Sale</h3>
        <div id="sale-line"></div>
        <Link  to="/AllSales">
          <button id='sale-b'>All sales</button>
        </Link>
      </div>

      <div id='sale-list'>
        {products.filter((item) => {
          if (item.discont_price) {
            return true;
          } else {
            return false;
          }
      }).slice(0, 4).map(item => <ProductCard product={item}/>)}
      </div>
    </div>
  )
}

export default Sale