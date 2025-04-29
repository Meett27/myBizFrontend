import { configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import productReducer from '../components/features/productComponent/productReducer';
import categoryReducer from '../components/features/categoryComponent/CategoryReducer';


export default configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});