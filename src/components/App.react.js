import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productsActions';
import { PAGES } from '../reducers/appReducer';
import NavBar from './NavBar.react';
import Cart from './Cart.react';
import CategoriesList from './CategoriesList.react';
import SearchResults from './SearchResults.react';
import Product from './Product.react';
import Category from './Category.react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  app: {
    fontFamily: 'Roboto, Arial, Helvetica, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  content: {
    position: 'relative',
    height: '100%',
    flexGrow: 1,
  },
  cardsAndCart: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  },
  cardsContainer: {
    flex: 1,
  },
  cartContainer: {
    width: '350px',
  },
});

function App() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { activePage, searchTerm, isCartTabOpen } = useSelector(
    state => state.app
  );
  const isSearchModeActive = searchTerm.length > 0;

  useEffect(() => dispatch(getProducts()), [dispatch]);

  const renderPage = () => {
    switch (activePage) {
      case PAGES.HOME:
        return <CategoriesList />;
      case PAGES.CATEGORY:
        return <Category />;
      case PAGES.PRODUCT:
        return <Product />;
      default:
        return <CategoriesList />;
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.navBar}>
        <NavBar />
      </div>
      <div className={styles.content}>
        {isSearchModeActive && <SearchResults />}
        <div className={styles.cardsAndCart}>
          <div className={styles.cardsContainer}>{renderPage()}</div>
          {isCartTabOpen && (
            <div className={styles.cartContainer}>
              <Cart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
