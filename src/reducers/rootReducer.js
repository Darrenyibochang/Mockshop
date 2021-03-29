import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import appReducer from './appReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  app: appReducer,
  cart: cartReducer,
  products: productsReducer,
});
