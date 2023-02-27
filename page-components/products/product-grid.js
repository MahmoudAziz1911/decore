import { useState, useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import ProductItem from './product-item'
import Filter from '../filters/filter';

const categories = [
  {
    id: 1,
    name: 'All',
  },
  {
    id: 2,
    name: 'shoes',
  },
  {
    id: 3,
    name: 'headphones',
  },
  {
    id: 4,
    name: 'shirt',
  },
];

const ProductGrid = ({ products, titleheader }) => {


  return (
    <Box>
      <Typography my={4} sx={{
        color: "#353535",
        display: "inline-block",
        fontSize: "24px",
        fontFamily: "Jost,sans-serif",
        fontWeight: "600",
        lineHeight: "34px",
        letterSpacing: "2px",
        borderBottom: "2px solid#a20401"
      }}
      >{titleheader}</Typography>
      <Grid container spacing={2}>
        <Grid md={3}>
          <Filter />
        </Grid>
        <Grid container md={9}>
        {products.map((product) => (
          <Grid key={product._id} xs={12} md={4} p={2}>
            <ProductItem product={product} titleheader={titleheader} />
          </Grid>
        ))}
        </Grid>
      </Grid>
    </Box>

  )
}

export default ProductGrid