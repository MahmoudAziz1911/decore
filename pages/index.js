import { useState } from "react";
import { useSession, getSession, signOut } from "next-auth/react"
import { Box, Button, Card, CardMedia, Container, Grid } from '@mui/material'
import Image from 'next/image'
import img from "@/assets/images/shipping.gif";
import img2 from "@/assets/images/banner-01.gif";
import HomePage from '@/page-components/home-page';
import { getData } from '@/utils/fetchData';
import Slider from "react-slick";
import FeaturedProducts from "@/page-components/products/featured-products";

const data = [
  /* {
    image: "/images/slider/banner-01.png"
  }, */
  {
    image: "/images/slider/banner-02.png"
  },
  {
    image: "/images/slider/banner-03.png"
  },
  {
    image: "/images/slider/banner-04.png"
  },
  {
    image: "/images/slider/banner-05.png"
  }
];

export default function Home({ products }) {
  const { data: session } = useSession()
  const settings = {
    dots: false,
    lazyLoad: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const featured = products.filter((product) => product.featured === true)
  return (
    <Container fixed>
      <Slider {...settings}>
        {
          data.map((content, i) => (
            <Grid key={i} item >
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={content.image}
                  alt="green iguana"
                />
              </Card>
            </Grid>
          ))
        }
      </Slider>
      <HomePage products={products} />
      <FeaturedProducts products={featured} titleheader="Featured Products" />
      {/* <Image src={img} alt="image" style={{ height: "100%", width: "100%" }} priority /> */}
      <Image src={img2} alt="image" style={{ height: "100%", width: "100%", objectFit: "cover" }} priority />
      <Button onClick={() => signOut()}>Sign Out</Button>
    </Container>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req })
  const products = await getData("products");
  console.log(products)

  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false
      }
    }
  }

  return {
    props: {
      session,
      products
    }
  }
}

