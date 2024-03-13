import React from 'react';
import { Link } from 'react-router-dom';
import mainBack from '../images/mainBack.svg'

function Header() {
  const backgroundStyle = {
    backgroundImage: `url(${mainBack})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div 
    id='header' 
    style={ backgroundStyle }>
      <h1 id='header-h1'>Amazing Discounts on Garden Products!</h1>
      <Link id='header-b' to="/AllSales">Check out</Link>
    </div>
  )
}

export default Header;