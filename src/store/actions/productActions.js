import axios from 'axios';
import { PRODUCTS_SUCCESS, PRODUCTS_ERROR } from '../action-types';

export const getProduct = (id) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(
                `https://backend-6ex0.onrender.com/products/${id}`
            );
            dispatch({ type: PRODUCTS_SUCCESS, payload: response.data });
        } catch(error) {
            dispatch({ type: PRODUCTS_ERROR, payload: error.message });
        }
    }
};
