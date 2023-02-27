import {
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItemText,
  MenuItem,
  MenuList,
  Typography
} from '@mui/material'
import img from "@/assets/images/coupon.jpg"
import Image from 'next/image';
const listStyle = { fontSize: 16, fontWeight: 'medium', letterSpacing: 0.5, fontFamily: 'Jost', '&:hover': { bgcolor: "transparent" } }


const FooterPage = () => {
  return (
    <Box mt={5} textAlign="">
      <Container>
        <Divider />
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={3}>
            <Image src={img} alt="image" width="100%" height="100%" style={{ objectFit: "contain" }} />
            <Typography sx={{
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Jost, sans-serif",
              lineHeight: "30px",
              textTransform: "none",
              color: "#777777",
            }}>Enjoy additional discounts on many product. Look for this coupon while shopping.</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <MenuList>
              <Typography sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Jost, sans-serif",
                lineHeight: "30px",
                textTransform: "none",
                color: "#222",
              }}
              > Company </Typography>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Home</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> About Us</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Contact Us</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Support Center</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> FaQ</ListItemText>
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid item xs={12} md={3}>
            <MenuList>
              <Typography sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Jost, sans-serif",
                lineHeight: "30px",
                textTransform: "none",
                color: "#222",
              }}
              > Support </Typography>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Delivery Information</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Order Tracking</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Gift Card</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Home Delivery</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Online Support</ListItemText>
              </MenuItem>
            </MenuList>
          </Grid>
          <Grid item xs={12} md={3}>
            <MenuList>
              <Typography sx={{
                fontSize: "18px",
                fontWeight: "bold",
                fontFamily: "Jost, sans-serif",
                lineHeight: "30px",
                textTransform: "none",
                color: "#222",
              }}
              > Information </Typography>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Payment Option</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Check out</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Discount</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Sittermap</ListItemText>
              </MenuItem>
              <MenuItem sx={{ '&:hover': { bgcolor: "transparent" } }}>
                <ListItemText primaryTypographyProps={listStyle}> Services</ListItemText>
              </MenuItem>
            </MenuList>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{
        bgcolor: "#222",
        marginTop: "20px",
         py: "25px",
          color: "#fff", 
          textAlign: "center"
          }}>
        <Typography sx= {{
                  fontSize: "16px",
                  fontFamily: "Jost",
                  letterSpacing: "2px",
          
        }}>
          <span>&copy;</span>
          {new Date().getFullYear()} - Owned & Managed By Fashion&trade;
        </Typography>
      </Box>
    </Box>
  )
}

export default FooterPage