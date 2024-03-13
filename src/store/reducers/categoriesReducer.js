import {CATEGORIES_SUCCESS, CATEGORIES_ERROR} from '../action-types';

const initialState = {
    categories: [],
    error: null,
};


export const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case CATEGORIES_SUCCESS:
            return {
                categories: action.payload,
                error: null,
            };
        case CATEGORIES_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

