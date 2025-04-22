import { configureStore } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import productReducer from '../reducers/productReducer';


export default configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});