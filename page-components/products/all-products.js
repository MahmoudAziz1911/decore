import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ProductItem from './product-item'
import ProductGrid from './product-grid'

const AllProducts = ({ products , titleheader}) => {
  return (
    <Container>
      <ProductGrid products={products} titleheader={titleheader} />
    </Container>
  )
}

export default AllProducts