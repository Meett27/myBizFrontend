import { GET_CATEGORIES, CREATE_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from "./CategoryAction";


const initialState = {
    categories: [],
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };
        case CREATE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.payload],
            };
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((category) =>
                    category.CategoryID === action.payload.CategoryID ? action.payload : category
                ),
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(
                    (category) => category.CategoryID !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default categoryReducer; 