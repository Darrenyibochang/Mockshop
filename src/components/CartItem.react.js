import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  cartItemContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '18px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  cartItemImgContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  cartItemImg: {
    maxWidth: '100%',
    maxHeight: 75,
  },
  cartItemTextContainer: {
    flex: 3,
    padding: '8px 12px',
    overflow: 'hidden',
  },
  textOverflowEllipsis: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export default function CartItem({
  product,
  qty,
  size,
  onCartItemClick,
  onCartItemDelete,
}) {
  const styles = useStyles();

  const { image, title, category } = product;

  const isClothingCategory =
    category === 'men clothing' || category === 'women clothing';

  return (
    <div className={styles.cartItemContainer} onClick={onCartItemClick}>
      <div className={styles.cartItemImgContainer}>
        <img src={image} alt={title} className={styles.cartItemImg} />
      </div>
      <div className={styles.cartItemTextContainer}>
        <div>
          <Typography className={styles.textOverflowEllipsis}>
            {`${qty} * ${title}`}
          </Typography>
        </div>
        {isClothingCategory && (
          <div>
            <Typography>
              Size:&nbsp;
              {size}
            </Typography>
          </div>
        )}
        <div>
          <Link onClick={onCartItemDelete}>Remove</Link>
        </div>
      </div>
    </div>
  );
}
