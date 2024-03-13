import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../store/actions/categoriesActions';
import { Link } from 'react-router-dom'
 
const URLIMAGE = 'https://backend-6ex0.onrender.com'; 
 
function Categories() { 
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  if (error) {
    return <h1>{error}</h1>;
  }

  // console.log('categories', categories)
 
  return ( 
    <div className='categories-block'> 
      <div className='categories'>
        <h3 className='categories-h3'>Categories</h3> 
        <div className="line"></div>
        <Link to={"/AllCategories"}>
        <button className='categories-b'>All categories</button> 
        </Link>
      </div>
 
      <div className='categories-list'> 
        {Array.isArray(categories) && categories.slice(0, 4).map((category) => ( 
          <div key={category.id}> 
          <Link to={`/categories/${category.id}`} className='categories-link'>
            <img className='category-img' src={`${URLIMAGE}${category.image}`} alt={category.title} /> 
            <p className="category-title">{category.title}</p> 
          </Link>
          </div> 
        ))} 
      </div> 
    </div> 
  ); 
} 
 
export default Categories;