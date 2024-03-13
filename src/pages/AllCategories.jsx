import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../store/actions/categoriesActions';
import { Link } from 'react-router-dom'


const URLIMAGE = 'https://backend-6ex0.onrender.com'; 

function AllCategories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const error = useSelector((state) => state.error);
  
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
      </div>

      <div className='all-categories'>
          <h1 className='all-categories-h3'>Categories</h1> 

          <div className='all-categories-list'> 
          {categories.map((category) => ( 
            <div key={category.id}> 
            <Link to={`/AllCategories/categories/${category.id}`} className='categories-link'>
              <img 
                className='all-category-img' 
                src={`${URLIMAGE}${category.image}`} 
                alt={category.title} 
              /> 
              <p className="all-category-title">{category.title}</p> 
            </Link>
            </div> 
          ))} 
        </div> 
      </div>
    </div>
  )
}

export default AllCategories;