import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from '../actions/appActions';
import CardItem from './CardItem.react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  categoryTitle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 16,
  },
  container: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexWrap: 'wrap',
  },
  titleCase: {
    textTransform: 'capitalize',
  },
});

export default function Category() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { selectedCategoryName } = useSelector(state => state.app);
  const products = useSelector(
    state => state.products.productsByCategory[selectedCategoryName]
  );

  const productClickHandler = productID => {
    dispatch(setProduct(productID));
  };

  return (
    <>
      <div className={styles.categoryTitle}>
        <Typography variant='h3' className={styles.titleCase}>
          {selectedCategoryName}
        </Typography>
      </div>
      <div className={styles.container}>
        {products.map((product, index) => (
          <CardItem
            key={product.id}
            label={product.title}
            imageURL={product.image}
            clickHandler={() => productClickHandler(product.id)}
          />
        ))}
      </div>
    </>
  );
}
