import { useContext } from 'react';
import { DataContext } from '@/store/GlobalState';
import { Grid, Typography } from '@mui/material';
import CartGrid from '@/page-components/cart/cartGrid';
import CartItem from '@/page-components/cart/cartItem';

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0) return <Typography component="h2">Cart Empty !</Typography>

  return (
    <>
      <CartItem />
    </>
  )
}

export default Cart