import { useContext } from 'react'
import { DataContext } from '@/store/GlobalState';
import Slider from "react-slick";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    CardMedia,
    Divider,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import { green } from '@mui/material/colors';
import { addToCart } from '@/store/Actions';
import Link from 'next/link';
import FormatPrice from '@/utils/FormatPrice';

const ProductCarsoul = ({ products }) => {
    const { state, dispatch } = useContext(DataContext);
    const { cart } = state;
    const settings = {
    dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
        <Box my={5}>
        <Typography sx={{
            marginBottom: "30px",
                    fontSize: "22px",
                    fontWeight: "bold",
                    fontFamily: "Jost, sans-serif",
                    lineHeight: "30px",
                    textTransform: "none",
                    color: "#a20401"
        }}
        >
            Daily Flash Sale!
        </Typography>
                 <Slider {...settings}> 
                    {products && products.map((product) => (
                         <Grid key={product._id} px={1}>
                            <Card elevation={2}>

                                <Box sx={{
                                    position: "absolute",
                                    direction: "column",
                                    top: "5px",
                                    left: "6px",
                                    color: "#ffffff",
                                    fontFamily: "Jost",
                                    zIndex: "10",
                                    textTransform: "uppercase"
                                }}>
                                    {product && product.discount > 0 && <Typography sx={{ bgcolor: "#a20401", fontFamily: "Jost", padding: "2px 8px", marginBottom: "2px" }} >{product.discount}% off</Typography>}
                                    {product && product.checked && <Typography sx={{ fontFamily: "Jost", padding: "2px 8px", bgcolor: green[800] }}>Sale!</Typography>}
                                </Box>
                                <div className="child">
                                    <CardMedia
                                        component="img"
                                        image={product.images[0].url}
                                        alt={product.images[0].url}
                                    />

                                    <Button className="btn"
                                    >Quick View</Button>
                                </div>

                                <CardHeader
                                    title={<Typography sx={{ fontSize: "14px", fontWeight: "400" }} variant="body" >{product.title} </Typography>}
                                    subheader={
                                        <>
                                            <Box sx={{ display: "flex", fontFamily: "Jost" }}>
                                                <Typography sx={{ fontFamily: "Jost" }}>
                                                    <span style={{ color: "#a20401", marginRight: "10px", fontSize: "18px" }}>
                                                        <FormatPrice price={product.price} />
                                                    </span>
                                                    <span style={{ fontSize: "15px", textDecoration: "line-through" }}>
                                                        200
                                                    </span>
                                                </Typography>
                                            </Box>
                                        </>
                                    }
                                />
                                <Divider />
                                <CardActions disableSpacing>
                                    <Button onClick={() => dispatch(addToCart(product, cart))}
                                    sx={{
                                            fontSize: "15px",
                                            fontFamily: "Jost, sans-serif",
                                            lineHeight: "25px",
                                            textTransform: "none",
                                            color: "#666",
                                            '&:hover': { bgcolor: "transparent", color: "#a20401" }
                                        }} startIcon={<AddCircleOutlineIcon />}>
                                        Add To Cart
                                    </Button>
                                    <Box sx={{
                                        display: "flex",
                                        marginLeft: "auto"
                                    }}>
                                        <IconButton component={Link} href={`/product/${product._id}`}>
                                            <RemoveRedEye />
                                        </IconButton>
                                    </Box>
                                </CardActions>
                            </Card>
                            </Grid>
                    ))}
                    
                 </Slider>
        </Box>
    )
}

export default ProductCarsoul