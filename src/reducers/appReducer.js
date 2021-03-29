import {
  SET_CATEGORY,
  SET_PRODUCT,
  NAVIGATE_TO_HOME_PAGE,
  UPDATE_SEARCH_TERM,
  TOGGLE_CART_TAB,
} from '../actions/appActions';

export const PAGES = {
  HOME: 'HOME',
  CATEGORY: 'CATEGORY',
  PRODUCT: 'PRODUCT',
};

const initialState = {
  activePage: PAGES.HOME,
  selectedCategoryName: null,
  selectedProductID: null,
  searchTerm: '',
  isCartTabOpen: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        activePage: PAGES.CATEGORY,    
        selectedCategoryName: action.categoryName,
      };
    case SET_PRODUCT:
      return {
        ...state,
        activePage: PAGES.PRODUCT,
        selectedProductID: action.productID,
      };
    case NAVIGATE_TO_HOME_PAGE:
      return {
        ...state,
        activePage: PAGES.HOME,
        selectedCategoryName: null,
        selectedProductID: null,
      };
    case UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case TOGGLE_CART_TAB:
      return {
        ...state,
        isCartTabOpen: !state.isCartTabOpen,
      };
    default:
      return state;
  }
}
