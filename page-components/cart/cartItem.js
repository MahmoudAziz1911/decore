import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '@/store/GlobalState';

import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { decreaseCart, increaseCart } from '@/store/Actions';
import Modals from '@/components/Modal';

const sxShipping = { fontFamily: "Jost, sans-serif", fontWeight: 400 , fontSize: "14px", color: "grey"}
const sxCost = {fontFamily: "Jost, sans-serif", fontWeight: 400 , fontSize: "14px" }


const CartItem = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [total, setTotal] = useState(0)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity)
      }, 0)

      setTotal(res)
    }

    getTotal();
  }, [cart])


  return (
    <Grid container spacing={5} my={5}>
      <Modals open={open} handleClose={handleClose} />
      <Grid item xs={12} sm={7} sx= {{ mx: { xs: 0, md: 6}}}>
        {cart.map((item) => (
          <Card key={item._id} sx={{ display: 'flex', my: 1 }}>
            <CardMedia
              component="img"
              sx={{ width: 121 }}
              src={item.images[0].url}
              alt="Live from space album cover"
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', position: "relative" }}>
              <CardContent>
                <Button sx={{
                  position: "absolute",
                  color: "grey",
                  left: { xs: 150, md: 470},
                  top: 0,
                  ':hover': {
                    bgcolor: 'white',
                    color: '#a20401'
                  },
                }}
                onClick={() => dispatch({
                  type: "ADD_MODAL",
                  payload: {data: cart, id: item._id, title: item.title}
                })}
                >
                  <CloseIcon onClick={handleOpen} />
                </Button>
                <Typography component="div" variant="body">
                  {item.title}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ fontFamily: "Jost, sans-serif", fontWeight: 400 , fontSize: "15px", color: "grey", pl: 2, pr: 2 }} variant="subtitle1" color="text.secondary" component="div">
                  {item.quantity} X ${item.price}
                </Typography>
                <Typography sx={{ fontFamily: "Jost, sans-serif", fontWeight: 400 , fontSize: "16px", color: "#a20401" }} >
                  ${item.quantity * item.price}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton onClick={() => dispatch(decreaseCart(cart, item._id))}
                  disabled={item.quantity === 1 ? true : false}
                  variant="outlined" size='small'>
                  <RemoveIcon fontSize="small" />
                </IconButton>
                <Typography sx={{ px: 1, fontFamily: "Jost, sans-serif", fontWeight: 400 , fontSize: "15px", color: "#444" }}>{item.quantity}</Typography>
                <IconButton onClick={() => dispatch(increaseCart(cart, item._id))} variant="outlined" size='small'>
                  <AddIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Card>
        ))}
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs={12} sm={3} textAlign="center" mx={2}>
        <Typography sx={{ fontFamily: "Jost, sans-serif", fontWeight: 500 , fontSize: "20px", color: "#a20401" }}>Cart Totals</Typography>

        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", my: 1.5, }}>
          <Typography sx={sxShipping}>SUBTOTAL</Typography>
          <Typography sx={sxCost}>${total}</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", my: 1.5 }}>
          <Typography sx={sxShipping}>SHIPPING</Typography>
          <Typography sx={sxCost}>$0</Typography>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", my: 1.5 }}>
          <Typography sx={sxShipping}>Total</Typography>
          <Typography sx={sxCost} color="#a20401">${total}</Typography>
        </Box>
        <Divider sx={{ mb: 3}} />
        <Button variant="contained" color='error'>PROCEED TO CHECKOUT</Button>

      </Grid>
    </Grid>
  );
}

export default CartItem;