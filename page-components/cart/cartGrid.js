import { useContext } from 'react';
import { DataContext } from '@/store/GlobalState';
import { Box, Grid, Typography, cardActionAreaClasses } from '@mui/material'
import CartItem from './cartItem';

const CartGrid = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  if (cart.length === 0) return <Typography component="h2">Cart Empty !</Typography>

  return (
    <>
      <Grid container spacing={2} my={5}>
        <Grid item xs={7}>
          {cart.map((item) => (
            <CartItem key={item._id} item={item} dispatch={dispatch} cart={cart} />
          ))}
        </Grid>

        <Grid item xs={5}>
          <Typography>400</Typography>
        </Grid>

      </Grid>

    </>
  )
}

export default CartGrid