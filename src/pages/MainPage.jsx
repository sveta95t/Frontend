import Categories from "../Components/Categories";
import React from 'react'
import Header from "../Components/Header";
import Sale from "../Components/Sale";
import Discount from "../Components/Discount/Discount";

function MainPage() {
  return (
    <>
      <Header />
      <Categories />
      <Discount />
      <Sale />
    </>
  )
}

export default MainPage;