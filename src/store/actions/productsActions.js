import axios from 'axios';
import { PRODUCTS_SUCCESS, PRODUCTS_ERROR, UPDATE_QUANTITY } from '../action-types';

export const getProducts = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(
                "https://backend-6ex0.onrender.com/products/all"
            );
            dispatch({ type: PRODUCTS_SUCCESS, payload: response.data });
        } catch(error) {
            dispatch({ type: PRODUCTS_ERROR, payload: error.message });
        }
    }
};
