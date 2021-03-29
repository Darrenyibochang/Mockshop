import React from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  cardContainer: {
    padding: 4,
    width: '25%',
    maxWidth: 270,
    boxSizing: 'border-box',
  },
  image: {
    height: 300,
    padding: 5,
    backgroundSize: 'contain',
  },
  title: {
    textTransform: 'capitalize',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

export default function CardItem({ label, imageURL, clickHandler }) {
  const styles = useStyles();

  return (
    <div className={styles.cardContainer}>
      <Card>
        <CardActionArea onClick={clickHandler}>
          <CardMedia className={styles.image} image={imageURL} />
          <CardContent>
            <Typography variant='h6' color='primary' className={styles.title}>
              {label}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
