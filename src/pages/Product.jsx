import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from '../store/actions/productActions';
import ProductDetails from '../Components/ProductDetails';

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const error = useSelector((state) => state.error);
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <div className='buttons'>
        <Link className='pages-button' to={"/"}>Main page</Link>
        <div className='all-line'></div>
        <Link className='pages-button' to={"/products"}>Products</Link>
        <div className='all-line'></div>
        {products.map((product) => ( 
        <Link className='pages-button' to={`/Product/${id}`}>{product.title}</Link> 
        ))} 
      </div>

      <div className='product-by-category-list'>
        {products.map((product) => (<ProductDetails key={product.id} product={product} />))} 
      </div>
    </div>
  );
}

export default Product;
