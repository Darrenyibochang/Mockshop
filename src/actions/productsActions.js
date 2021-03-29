import { MOCK_DATA } from './../mock_data';
export const POPULATE_PRODUCTS = 'POPULATE_PRODUCTS';

export const populateProducts = products => ({
  type: POPULATE_PRODUCTS,
  payload: products,
});

export const getProducts = () => dispatch => {
  // fetch('https://fakestoreapi.com/products')
  //   .then(res => res.json())
  //   .then(json => {
  //     dispatch(populateProducts(json));
  //   });
  dispatch(populateProducts(MOCK_DATA));
};
