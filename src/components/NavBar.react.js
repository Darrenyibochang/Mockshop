import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {
  navigateToHomePage,
  changeSearchTerm,
  toggleCartTab,
} from './../actions/appActions';

const useStyles = makeStyles(theme => ({
  homeButton: {
    marginRight: theme.spacing(2),
  },
  cartButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function NavBar() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { searchTerm } = useSelector(state => state.app);
  const isCartEmpty =
    Object.keys(useSelector(state => state.cart.itemsInCart)).length === 0;

  const handleHomeClick = () => dispatch(navigateToHomePage());
  const handleCartClick = () => {
    dispatch(toggleCartTab());
  };
  const handleChangeSearchTerm = newSearchTerm => {
    dispatch(changeSearchTerm(newSearchTerm));
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.homeButton}
          color='inherit'
          aria-label='home'
          onClick={handleHomeClick}
        >
          <HomeIcon />
        </IconButton>
        <Typography className={classes.title} variant='h6' noWrap>
          MockShop
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            value={searchTerm}
            onChange={event => handleChangeSearchTerm(event.target.value)}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <IconButton
          className={classes.cartButton}
          color='inherit'
          aria-label='cart'
          onClick={handleCartClick}
        >
          {isCartEmpty ? (
            <ShoppingCartOutlinedIcon size='medium' />
          ) : (
            <ShoppingCartIcon size='medium' />
          )}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
