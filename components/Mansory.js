import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Box sx={{position: "relative", display: "table"}}>
              <Typography component="h4" sx={{
                display: "table",
                position: "absolute", 
                color: "#fff",
                top: "100px",
                left: "30px",

            }}>
              <span style={{display: "block"}}>{item.title}</span>
              <span style={{display: "block"}}>{item.title1}</span>
              </Typography>
            </Box>
            <img
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/banner1-home1.jpg',
    title: 'Mini Rugs ',
    title1: "From $50"
  },
  {
    img: 'https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/banner3-home1.jpg',
    title: 'Top Rated Sideboards Under $150',
  },
  {
    img: 'https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/banner4-home1.jpg',
    title: 'Appliances For Kitchen',
  },
  {
    img: 'https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/banner2-home1.jpg',
    title: 'Sale 50% Of Table Lamp',
  },
  {
    img: 'https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/09/banner5-home1.jpg',
    title: 'Sea Office Chairs New Style',
  },
  
];