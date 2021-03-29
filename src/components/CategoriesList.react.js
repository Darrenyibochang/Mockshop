import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../actions/appActions';
import CardItem from './CardItem.react';
import { makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default function CategoriesList() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const productsByCategory = useSelector(
    state => state.products?.productsByCategory
  );

  const categoryNames = Object.keys(productsByCategory);

  const categoryClickHandler = category => {
    dispatch(setCategory(category));
  };

  return (
    <div className={styles.container}>
      {categoryNames.length > 0 ? (
        categoryNames.map((category, index) => {
          return (
            <CardItem
              key={index}
              label={category}
              imageURL={productsByCategory[category][0].image}
              clickHandler={() => categoryClickHandler(category)}
            />
          );
        })
      ) : (
        <CircularProgress size={24} />
      )}
    </div>
  );
}
