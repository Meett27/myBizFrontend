import { GET_PRODUCTS, CREATE_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from './ProductAction';

const initialState = {
    products: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
        case CREATE_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product =>
                    product.ProductID === action.payload.ProductID ? action.payload : product
                )
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.ProductID !== action.payload)
            };
        default:
            return state;
    }
};

export default productReducer;
