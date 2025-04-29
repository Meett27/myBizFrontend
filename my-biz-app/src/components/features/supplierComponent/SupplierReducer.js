import { GET_SUPPLIERS, GET_SUPPLIERS_BY_ID, CREATE_SUPPLIER, UPDATE_SUPPLIER, DELETE_SUPPLIER } from "./SupplierAction";

const initialState = {
    suppliers: [],
};

const supplierReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SUPPLIERS:
            return {
                ...state,
                suppliers: action.payload,
            };
        case GET_SUPPLIERS_BY_ID:
            return {
                ...state,
                supplier: action.payload,
            };
        case CREATE_SUPPLIER:
            return {
                ...state,
                suppliers: [...state.suppliers, action.payload],
            };
        case UPDATE_SUPPLIER:
            return {
                ...state,
                suppliers: state.suppliers.map((supplier) =>
                    supplier.SupplierID === action.payload.SupplierID ? action.payload : supplier
                ),
            };
        case DELETE_SUPPLIER:
            return {
                ...state,
                suppliers: state.suppliers.filter(
                    (supplier) => supplier.SupplierID !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default supplierReducer;