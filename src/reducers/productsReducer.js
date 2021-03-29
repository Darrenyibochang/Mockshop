import { POPULATE_PRODUCTS } from '../actions/productsActions';

const initialState = {
  products: [],
  productsByID: {},
  productsByCategory: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_PRODUCTS:
      const products = action.payload;

      // turns {products: [[product]]} into {[category]: [[product]]}
      const productsByCategory = products.reduce((accumulator, product) => {
        const category = product.category;
        return {
          ...accumulator,
          [category]: [...(accumulator[category] || []), product],
        };
      }, {});

      // turns {products: [[product]]} into {[productID]: [[product]]}
      const productsByID = products.reduce((accumulator, product) => {
        return { ...accumulator, [product.id]: product };
      }, {});

      return { ...state, products, productsByID, productsByCategory };

    default:
      return state;
  }
}
