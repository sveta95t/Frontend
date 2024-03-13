import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/productsActions';
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';
import DiscountedFilter from '../Components/filtres/DiscountedFilter/DiscountedFilter';

function AllSales() {
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
    <div >
      <div className='buttons'>
        <Link className='pages-button' to={"/"}>Main page</Link>
        <div className='all-line'></div>
        <Link className='pages-button' to={"/AllSales"}>All sales</Link>
      </div>

      <h3 id='h1-pages'>Discounted items</h3>

      <DiscountedFilter />

      <div id='sales-list'>
          {products.filter((item) => {
            if (item.discont_price) {
              return true;
            } else {
              return false;
            }
          }).map(item => <ProductCard product={item}/>)}
      </div>
    </div>
  )
}


export default AllSales