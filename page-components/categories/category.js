import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const categories = [
    {
        title: "Furniture",
        path: "/",
        image: "/images/categories/cat-1.jpg"
    },
    {
        title: "Outdoor",
        path: "/",
        image: "/images/categories/cat-2.jpg"
    },
    {
        title: "Bed & Bath",
        path: "/",
        image: "/images/categories/cat-3.jpg"
    },
    {
        title: "Decor & Pillows",
        path: "/",
        image: "/images/categories/cat-4.jpg"
    },
    {
        title: "Rugs",
        path: "/",
        image: "/images/categories/cat-5.jpg"
    },
    {
        title: "Lighting",
        path: "/",
        image: "/images/categories/cat-6.jpg"
    },
    {
        title: "Renovation",
        path: "/",
        image: "/images/categories/cat-7.jpg"
    },
    {
        title: "Appliances",
        path: "/",
        image: "/images/categories/cat-8.jpg"
    },
    {
        title: "Kitchen",
        path: "/",
        image: "/images/categories/cat-9.jpg"
    },
    {
        title: "Baby & Kids",
        path: "/",
        image: "/images/categories/cat-10.jpg"
    },
    {
        title: "Offices",
        path: "/",
        image: "/images/categories/cat-11.jpg"
    },
    {
        title: "Organization",
        path: "/",
        image: "/images/categories/cat-12.jpg"
    },
]
const Category = () => {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} textAlign="center" my={5}>
            {
                categories.map((cat, index) => {
                    return (
                        <Grid key={index} item xs={6} sm={3} lg={2}>
                        <Box sx={{ py: "6px", "&:hover": { border: "1px dotted#E5E5E5" } }}>
                            <img src={cat.image} alt="rr" style={{ height: "95%", width: "85%" }} />
                            <Typography sx={{
                                fontSize: { xs: "18px", sm: "16px"},
                                lineHeight: "20px",
                                fontFamily: "Jost",
                                fontWeight: "400",
                                color: "rgba(22,22,22,1)"
                            }}>{cat.title}</Typography>
                        </Box>
                    </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default Category