import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct, changeSearchTerm } from '../actions/appActions';
import CardItem from './CardItem.react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  searchResultsPage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    zIndex: 10,
    top: 0,
    padding: '20px',
  },
  searchResultsHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchResultsTitle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
  searchResultsContainer: { display: 'flex', flexWrap: 'wrap' },
});

function SearchResults() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { searchTerm } = useSelector(state => state.app);
  const { products } = useSelector(state => state.products);

  const lowerCaseSearchTerm = searchTerm.toLowerCase();

  const searchMatches =
    lowerCaseSearchTerm.length >= 3
      ? products.filter(
          product =>
            product.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            product.category.toLowerCase().includes(lowerCaseSearchTerm) ||
            product.description.toLowerCase().includes(lowerCaseSearchTerm)
        )
      : [];

  const handleClearSearchResults = () => {
    dispatch(changeSearchTerm(''));
  };

  const productClickHandler = productID => {
    dispatch(setProduct(productID));
    handleClearSearchResults();
  };

  return (
    <div className={styles.searchResultsPage}>
      <div className={styles.searchResultsHeader}>
        <div>
          <div className={styles.searchResultsTitle}>
            <Typography variant='h3' className={styles.titleCase}>
              Search Results for
            </Typography>
          </div>
          <div>
            <Typography variant='h4' className={styles.searchResultsTitle}>
              "{searchTerm}"
            </Typography>
          </div>
        </div>
        <div>
          <Button onClick={() => handleClearSearchResults()}>
            Clear Search Results
          </Button>
        </div>
      </div>
      <div className={styles.searchResultsContainer}>
        {searchMatches.map(product => (
          <CardItem
            key={product.id}
            label={product.title}
            imageURL={product.image}
            clickHandler={() => productClickHandler(product.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
