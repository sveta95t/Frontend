import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { categoriesReducer } from './reducers/categoriesReducer';
import { navReducer } from './reducers/navReducer';
import { productsReducer } from "./reducers/productsReducer";

const rootReduser = combineReducers({
    categories: categoriesReducer,
    menu: navReducer,
    products: productsReducer,
});
  
export const store = createStore(rootReduser, applyMiddleware(thunk));