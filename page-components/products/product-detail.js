import Image from 'next/image';
import { Box, Chip, Button, Grid, Stack, Divider, Typography, Container, Rating, Card, CardMedia, Avatar, Paper } from '@mui/material';
import FormatPrice from '@/utils/FormatPrice';
import Slider from "react-slick";
import img from "@/assets/images/sale3.png";

const ProductDetail = ({ product }) => {
  const settings = {
    customPaging: function (i) {
      return (
      
        <Stack sx={{ position: "absolute", margin: "auto", right: {xs: -20, sm: "100"}}} my={3}>
          <Box component="img" alt={product.images[i].url} src={product.images[i].url} variant="square" sx={{
            width: 100,
            height: 50,
          }} />
        </Stack>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    fade: true,
    autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <Paper sx={{ my: "40px"}} elevation={0}>
      <Image src={img} alt="image" style={{ height: "100%", width: "100%" }} priority />
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Slider {...settings}>
              {product.images.map((item) => (
                <Box
                  component="img"
                  sx={{
                    height: 450,
                    width: 400,
                    maxHeight: { xs: 233, md: 390 },
                    maxWidth: { xs: 350, md: 450 },
                  }}
                  alt={item.url}
                  src={item.url}
                />
              ))}
            </Slider>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: '100%', maxWidth: 470, bgcolor: 'background.paper' }}>
              <Box sx={{ my: {xs: 8, sm: 2}, mx: 2 }}>
                <Grid container alignItems="center">
                  <Grid item xs>
                    <Typography sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "Jost, sans-serif",
                    marginBottom: "12px",
                    lineHeight: "34px",
                    textTransform: "none",
                    color: "rgba(22,22,22,1);"
        }}  component="div">
                      {product.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography gutterBottom variant="h6" component="div">
                      <FormatPrice price={product.price} />
                    </Typography>
                  </Grid>
                </Grid>
                <Typography sx={{ fontFamily: "Jost, sans-serif"}} variant="body">
                  {product.content}
                </Typography>
              </Box>
              <Divider variant="middle" />
              <Box sx={{ m: 2 }}>
                <Grid container alignItems="center" my={2}>
                  <Grid item xs>
                    <Rating name="read-only" value={3.5} readOnly size="small" />
                    ( 400 )
                  </Grid>
                  <Grid item>
                    <Typography sx={{ fontSize: "16px", lineHeight: "28px", fontFamily: "Jost, sans-serif"}} variant="h6" component="div">
                      Status: {
                        product.inStock > 0 && <span style={{ color: "#009900"}}>In Stock</span> || product.inStock === 0 && <span style={{ color: "#707070"}}>Out Stock</span>
                      }
                    </Typography>
                  </Grid>
                </Grid>
                <Typography gutterBottom variant="body1">
                  Select type
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label="Medium" />
                  <Chip label="Larg" />
                  <Chip label="X Larg" />
                </Stack>
                <Typography gutterBottom variant="body1" my={3}>
                  Categories: {product.categories}
                </Typography>
              </Box>
              <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                <Button variant="contained" sx={{bgcolor:"#222", '&:hover': {bgcolor: "#a20401"}}}>Add to cart</Button>
              </Box>
            </Box>

          </Grid>
        </Grid>
        </Paper>
    </Container>
  )
}

export default ProductDetail