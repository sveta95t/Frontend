import axios from 'axios';
import {CATEGORIES_SUCCESS, CATEGORIES_ERROR} from '../action-types';

export const getCategories = () => {
    return async(dispatch) => {
        try {
            const response = await axios.get(
                "https://backend-6ex0.onrender.com/categories/all"
            );
            dispatch({ type: CATEGORIES_SUCCESS, payload: response.data });
        } catch(error) {
            dispatch({ type: CATEGORIES_ERROR, payload: error.message });
        }
    }
};
