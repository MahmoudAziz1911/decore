import { useContext } from 'react';
import { DataContext } from '@/store/GlobalState';
import { Box, Button, Card, CardActions, CardHeader, CardMedia, Divider, IconButton, Rating, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { RemoveRedEye } from '@mui/icons-material';
import { addToCart } from '@/store/Actions';
import Link from 'next/link';
import FormatPrice from '@/utils/FormatPrice';

const ProductItem = ({ product, titleheader }) => {
    const { state, dispatch } = useContext(DataContext);
    const { cart } = state;
    return (
        <>
        <Card elevation={1}>
            <div className="container">
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
                    { product.discount > 0 && <Typography sx={{ bgcolor: "#a20401", fontFamily: "Jost", padding: "2px 8px", marginBottom: "2px" }} >{product.discount}% off</Typography>}
                    { product.checked && <Typography sx={{ fontFamily: "Jost", padding: "2px 8px", bgcolor: green[800] }}>Sale!</Typography>}
                </Box>
                <div className="child">
                    <CardMedia
                        component="img"
                        image={product.images[0].url}
                        alt={product.images[0].url}
                        sx={{ objectFit: "contain" }}
                    />

                    <IconButton component={Link} href={`product/${product._id}`} className="btn">
                        <RemoveRedEye />
                    </IconButton>
                </div>
            </div>
            <CardHeader
                title={<Typography sx={{ fontSize: "16", fontWeight: "400" }} variant="body" >{product.title}</Typography>}
                subheader={
                    <Box my={0.5} sx={{ display: "flex", fontFamily: "Jost" }}>
                        <Rating defaultValue={3} size="small" />
                        <Typography sx={{ fontSize: "16px", fontFamily: "Jost", marginLeft: "auto" }}>
                            <span style={{ color: "#a20401", marginRight: "10px", fontSize: "20px" }}>
                                <FormatPrice price={product.price} />
                            </span>
                            <span style={{ fontSize: "15px", textDecoration: "line-through" }}>
                                200
                            </span>
                        </Typography>
                    </Box>
                }
            />
            <Divider />
            <CardActions disableSpacing>
                <Button sx={{
                    fontSize: "15px",
                    fontFamily: "Jost, sans-serif",
                    lineHeight: "30px",
                    textTransform: "none",
                    color: "#666",
                    '&:hover': { bgcolor: "transparent", color: "#a20401" }
                    }} startIcon={<AddCircleOutlineIcon />}
                    onClick={()=> dispatch(addToCart(product, cart))}
                >
                   Add to cart
                </Button>
                <Box sx={{
                    marginLeft: "auto"
                }}>
                    <IconButton>
                        <FavoriteBorderIcon />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
        </>
    )
}

export default ProductItem