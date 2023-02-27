import { Box, Container, Grid, Typography } from '@mui/material'
import ProductItem from './product-item'

const FeaturedProducts = ({ products, titleheader}) => {
  return (
<Container>
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
        {products.map((product) => (
          <Grid key={product._id} xs={12} md={3} my={2}>
            <ProductItem product={product} titleheader={titleheader} />
          </Grid>
        ))}
      </Grid>
    </Container>  
    )
}

export default FeaturedProducts