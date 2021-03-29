import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  itemsInCart: {},
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const cartItemKey = `${action.payload.id}_${action.payload.size}`;
      return {
        ...state,
        itemsInCart: {
          ...state.itemsInCart,
          [cartItemKey]:
            (state.itemsInCart[cartItemKey] || 0) + action.payload.qty,
        },
      };
    case REMOVE_FROM_CART:
      const { [action.cartItemID]: _, ...otherCartItems } = state.itemsInCart;
      return { ...state, itemsInCart: otherCartItems };
    default:
      return state;
  }
}
