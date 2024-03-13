import { 
    PRODUCTS_SUCCESS, 
    PRODUCTS_ERROR,
    SORT_BY_VALUE,
    TOGGLE_DISCOUNT_FILTER,
} from "../action-types";

const initialState = {
    error: null,
    products: [],
    sortBy: 'default',
    filterByDiscount: false,
};

export const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                error: null,
            };
        case PRODUCTS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        
        case SORT_BY_VALUE:
            let sortedProducts = [...state.products];
            switch(action.payload) {
                case 'price-high-low':
                    sortedProducts.sort((a, b) => b.price - a.price);
                    return {
                        ...state,
                        sortBy: 'price-high-low',
                        products: sortedProducts,
                    };
                case 'price-low-high':
                    sortedProducts.sort((a, b) => a.price - b.price);
                    return {
                        ...state,
                        sortBy: 'price-low-high',
                        products: sortedProducts,
                    };
                case 'newest':
                    sortedProducts.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                    return {
                        ...state,
                        sortBy: 'newest',
                        products: sortedProducts,
                    };
                case 'default':
                    sortedProducts.sort((a, b) => a.id - b.id );
                    return {
                        ...state,
                        sortBy: 'default',
                        products: sortedProducts,
                    };
                default:
                    return state;
            }
        case TOGGLE_DISCOUNT_FILTER:
            let filteredProducts = [...state.products];
            if (state.filterByDiscount) {
                filteredProducts = filteredProducts.filter(product => product.discont_price);
            }
            return {
                ...state,
                filterByDiscount: !state.filterByDiscount,
                products: filteredProducts,
            };
        default:
            return state;
    }
};

export const sortByValueAction = (payload) => ({type: SORT_BY_VALUE, payload});
export const toggleDiscountFilterAction = () => ({type: TOGGLE_DISCOUNT_FILTER});
