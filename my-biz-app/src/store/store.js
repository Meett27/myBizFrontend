import { configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import productReducer from '../components/features/productComponent/productReducer';
import categoryReducer from '../components/features/categoryComponent/CategoryReducer';
import supplierReducer from '../components/features/supplierComponent/SupplierReducer';


export default configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    suppliers: supplierReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});