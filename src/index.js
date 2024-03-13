import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Categories from './styles/Categories.css';
import Contact from './styles/Contact.css';
import AllCategories from './styles/AllCategories.css';
import Nav from './styles/Nav.css';
import AllProducts from './styles/AllProducts.css';
import Header from './styles/Header.css'
import AllSales from './styles/AllSales.css';
import ProductsByCategory from './styles/ProductsByCategory.css';
import ProductDetails from './styles/ProductDetails.css';
import Cart from './styles/Cart.css';
import Sale from './styles/Sale.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
