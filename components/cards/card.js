import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
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
import Link from 'next/link';
import { DataContext } from '@/store/GlobalState';
import { useContext } from 'react';
import { addToCart } from '@/store/Actions';


export const ProductCard = ({ products }) => {
    const { state, dispatch } = useContext(DataContext);
    const { cart } = state;

    return (
        <div>
            <Box my={5}>
                {/* <Typography my={4} sx={{
                    color: "#353535",
                    display: "inline-block",
                    fontSize: "24px",
                    fontFamily: "Jost,sans-serif",
                    fontWeight: "600",
                    lineHeight: "34px",
                    letterSpacing: "2px",
                    borderBottom: "2px solid#a20401"
                }}
                >New Arrival In Month</Typography> */}
                <Grid container spacing={0.5} direction="row">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        breakpoints={{
                            425: {
                                width: 425,
                                slidesPerView: 0.5,
                            },
                            // when window width is >= 640px
                            640: {
                                width: 640,
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                width: 768,
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product._id}>
                                <Card elevation={0}>
                                    
                                        {/* <Box sx={{
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
                                        </Box> */}
                                       {/*  <div className="child">
                                        <CardMedia
                                                component="img"
                                                image={product.images[0].url}
                                                alt={product.images[0].url}
                                            />

                                            <Button component={Link} href={`/product/detailProduct/${product._id}`} className="btn"
                                            >Quick View</Button>
                                        </div> */}
                                    
                                    {/* <CardHeader
                                        title={<Typography sx={{ fontSize: "14px", fontWeight: "400" }} variant="body" >{product.title} </Typography>}
                                        subheader={
                                            <>
                                                <Box sx={{ display: "flex", fontFamily: "Jost" }}>
                                                    <Typography sx={{ fontFamily: "Jost" }}>
                                                        <span style={{ color: "#a20401", marginRight: "10px", fontSize: "18px" }}>
                                                            {product.price}.00
                                                        </span>
                                                        <span style={{ fontSize: "15px", textDecoration: "line-through" }}>
                                                            200
                                                        </span>
                                                    </Typography>
                                                </Box>
                                            </>
                                        }
                                    /> */}
                                    <Divider />
                                    {/* <CardActions disableSpacing>
                                        <Button  onClick={()=> dispatch(addToCart(product, cart))}
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
                                            <IconButton>
                                                <FavoriteBorderIcon />
                                            </IconButton>

                                        </Box>
                                    </CardActions> */}
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Grid>
            </Box>
            <Divider sx={{ borderStyle: "dotted" }} />
        </div>
    )
}

