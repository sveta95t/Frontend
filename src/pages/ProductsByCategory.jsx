import React from 'react'
import {useParams} from "react-router-dom";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../store/actions/productsActions';
import { getCategories } from '../store/actions/categoriesActions';
import { Link } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';
import AllCategories from './AllCategories';

function ProductsByCategory() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const categories = useSelector((state) => state.categories.categories);
    const error = useSelector((state) => state.error);
    const {id} = useParams();
    
    useEffect(() => {
      dispatch(getProducts());
    }, []);
    
    useEffect(() => {
        dispatch(getCategories());
    }, []);    
    
    if (error) {
      return <h1>{error}</h1>;
    }
  

  return (
    <div>
        <div className='buttons'>
            <Link className='pages-button' to={"/"}>Main page</Link>
            <div className='all-line'></div>
            <Link className='pages-button' to={"/AllCategories"}>Categories</Link>
            <div className='all-line'></div>
            <Link className='pages-button'>Tools and equipment</Link>
        </div>

        <div>
          {categories.filter((item) => {
            if (item.title == id) {
              return true;
            } else {
              return false;
            }
          }).map(item => <AllCategories category={item.title}/>)}
        </div>

        <div className='product-by-category-list'>
          {products.filter((item) => {
            if (item.categoryId == id) {
              return true;
            } else {
              return false;
            }
          }).map(item => <ProductCard product={item}/>)}
        </div>
    </div>
  )
}

export default ProductsByCategory