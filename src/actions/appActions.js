export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_PRODUCT = 'SET_PRODUCT';
export const NAVIGATE_TO_HOME_PAGE = 'NAVIGATE_TO_HOME_PAGE';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const TOGGLE_CART_TAB = 'TOGGLE_CART_TAB';

export const setCategory = categoryName => ({
  type: SET_CATEGORY,
  categoryName,
});

export const setProduct = productID => ({
  type: SET_PRODUCT,
  productID,
});

export const navigateToHomePage = page => ({
  type: NAVIGATE_TO_HOME_PAGE,
  page,
});

export const changeSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  searchTerm,
});

export const toggleCartTab = () => ({
  type: TOGGLE_CART_TAB,
});
