import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AllCategories from './pages/AllCategories'
import Categories from "./Components/Categories";
import Nav from "./Components/Nav";
import AllProducts from "./pages/AllProducts";
import Product from "./pages/Product";
import Contact from "./Components/Contact";
import AllSales from "./pages/AllSales";
import PaymentSuccess from "./pages/PaymentSuccess";
import ProductsByCategory from "./pages/ProductsByCategory";
import Cart from "./Components/Cart";
import { CartProvider } from "react-use-cart"; 

function App() {
  return (  
    
    <>
     <CartProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="categories" element={<Categories />}/>
        <Route path="/AllCategories" element={<AllCategories />}/>
        <Route path="/categories/:id" element={<ProductsByCategory />}/>
        <Route path="/AllCategories/categories/:id" element={<ProductsByCategory />}/>
        <Route path="/AllProducts" element={<AllProducts/>}/>
        <Route path="/Product/:id" element={<Product/>}/>
        <Route path="/AllSales" element={<AllSales/>}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/PaymentSuccess" element={<PaymentSuccess />}/>
      </Routes>
      <Contact />
      </CartProvider>
    </>
  );
}

export default App;
