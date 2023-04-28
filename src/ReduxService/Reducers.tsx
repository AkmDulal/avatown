import { combineReducers } from 'redux';
import productSlice from './Slice/Product';
import cartSlice from './Slice/CartSlice';
const rootReducer = combineReducers({
    product: productSlice,
    cart: cartSlice,
});

export default rootReducer;