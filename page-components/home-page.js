import {
  Box,
  Divider,
  Grid,
  Paper,
  Typography,

} from "@mui/material";
import Image from "next/image";
import Category from "./categories/category";
import ProductCarsoul from "./products/product-carsoul";
import img3 from "@/assets/images/ar_strip-01.gif"


const contents = [
  {
    title: "Amazing Value Every Day",
    subtitle: "Items prices that fit your budget.",
    image: "/images/icons/budget.png"
  },
  {
    title: "Free Shipping Over $35*",
    subtitle: "Popular delivery on 1 - 2 days",
    image: "/images/icons/free.png"
  },
  {
    title: "Expert Customer Service",
    subtitle: "Our team on hand seven days a week.",
    image: "/images/icons/customer.png"
  }
]


const HomePage = ({ products }) => {
  return (
    <div>
      <Grid container direction="row" my={5}>
        {
          contents.map((content, i) => (
            <Grid key={i} item xs={12} sm={4}>
              <Paper elevation={0} sx={{ display: "flex", my: "10px" }}>
                <Box>
                  <Image
                    src={content.image}
                    alt=""
                    width="45"
                    height="45"
                  />
                </Box>
                <Box sx={{ display: "grid", ml: "10px" }}>
                  <Typography sx={{ fontSize: "16px", lineHeight: "22px", fontWeight: "600", letterSpacing: "1px", fontFamily: "Jost, sans-serif" }} variant="h6">
                    {content.title}</Typography>
                  <Typography sx={{ color: "#767676", fontSize: "14px", fontFamily: "Jost" }}>
                    {content.subtitle}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))
        }
      </Grid>

      <Divider sx={{ borderStyle: "dotted" }} />
      {/* <ProductCard products={products} /> */}
      <ProductCarsoul products={products} />
      <Image src={img3} alt="image" style={{ height: "100%", width: "100%", objectFit: "cover" }} priority />

      <Category />
      
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} my={5}>
        <Grid item xs={12} sm={4}>
          <Image src="/images/pg-1.png" alt="pg-1" width={350} height={200} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image src="/images/pg-2.png" alt="pg-2" width={350} height={200} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Image src="/images/pg-3.png" alt="pg-3" width={350} height={200} />
        </Grid>
        
      </Grid>
    </div>
  )
}

export default HomePage;

