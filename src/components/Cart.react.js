import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core';
import CartItem from './CartItem.react';
import Button from '@material-ui/core/Button';
import { setProduct } from '../actions/appActions';
import { removeFromCart } from '../actions/cartActions';

const useStyles = makeStyles({
  maxHeight: {
    height: '100%',
  },
  cartContent: {
    padding: '24px 18px',
    position: 'relative',
  },
  checkoutButtonContainer: {
    position: 'fixed',
    padding: '24px 18px',
    width: 350,
    boxSizing: 'border-box',
    bottom: 0,
  },
});

export default function Cart() {
  const dispatch = useDispatch();
  const styles = useStyles();

  const { itemsInCart } = useSelector(state => state.cart);
  const { productsByID } = useSelector(state => state.products);
  const cartItemEntries = Object.entries(itemsInCart);

  const cartItemClickHandler = productID => {
    dispatch(setProduct(productID));
  };

  const cartItemDeleteHandler = (event, cartItemID) => {
    event.stopPropagation();
    dispatch(removeFromCart(cartItemID));
  };

  return (
    <div className={styles.maxHeight}>
      <Paper className={styles.maxHeight} elevation={3}>
        <div className={styles.cartContent}>
          {cartItemEntries.length === 0
            ? 'Your cart is empty'
            : cartItemEntries.map(([cartItemID, qty]) => {
                const [productID, size] = cartItemID.split('_', 2);
                return (
                  <CartItem
                    key={cartItemID}
                    product={productsByID[productID]}
                    qty={qty}
                    size={size}
                    onCartItemClick={() => {
                      cartItemClickHandler(productID);
                    }}
                    onCartItemDelete={event =>
                      cartItemDeleteHandler(event, cartItemID)
                    }
                  />
                );
              })}
        </div>
        <div className={styles.checkoutButtonContainer}>
          <Button variant='contained' color='primary'>
            Checkout
          </Button>
        </div>
      </Paper>
    </div>
  );
}
