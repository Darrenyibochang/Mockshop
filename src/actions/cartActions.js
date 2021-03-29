export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = productWithCartDetails => ({
  type: ADD_TO_CART,
  payload: productWithCartDetails,
});

export const removeFromCart = cartItemID => ({
  type: REMOVE_FROM_CART,
  cartItemID,
});
