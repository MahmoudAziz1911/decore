import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import GrainIcon from '@mui/icons-material/Grain';

import AllProducts from "@/page-components/products/all-products"
import { getData } from "@/utils/fetchData";
import Categories from "./categories";
import { Box, Container } from '@mui/material';
import Filter from '@/page-components/filters/filter';

const Shop = ({ products }) => {
  return (
    <Container>
   
    <Breadcrumbs pt={5} aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
       
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Shop
        </Typography>
      </Breadcrumbs>
      <AllProducts products={products}/>
    </Container>
  )
}

export default Shop;

export const getServerSideProps = async () => {
  const products = await getData("products");

  return {
    props: {
      products
    }
  }
}
