/* import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';

const pages = ['Products', 'Pricing', 'Blog'];
const Filter = () => {
   const [navMenu, setNavMenu] = useState(null);

   const handleOpenMenu = (event) => {
       setNavMenu(event.currentTarget)
   }
   const handleCloseMenu = () => {
       setNavMenu(null)
   }

 return (
   <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
       <Toolbar>
       <Box>
           <IconButton
             size="large"
             aria-label="account of current user"
             aria-controls="menu-appbar"
             aria-haspopup="true"
             onClick={handleOpenMenu}
             color="inherit"
           >
             <MenuIcon /> 
           </IconButton>
           <Menu
             id="menu-appbar"
             anchorEl={navMenu}
             anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'left',
             }}
             keepMounted
             transformOrigin={{
               vertical: 'top',
               horizontal: 'left',
             }}
             open={Boolean(navMenu)}
             onClose={handleCloseMenu}
             sx={{
               display: 'block',
               maxWidth: "500px"
             }}
           >
             {pages.map((page) => (
               <MenuItem key={page} onClick={handleCloseMenu}>
                 <Typography textAlign="center">{page}</Typography>
               </MenuItem>
             ))}
           </Menu>
         </Box>

         
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           News
         </Typography>
         <Button color="inherit">Sort by</Button>
       </Toolbar>
     </AppBar>
   </Box>
 );
}

export default Filter */



import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
const sxMenu = { fontSize: { xs: "18px", sm: "16px"},
lineHeight: "20px",
fontFamily: "Jost, sans-serif",
fontWeight: "400",
color: "rgba(22,22,22,1)" }
const Filter = () => {
    return (
        <Paper elevation={0} sx={{ width: 230, maxWidth: '100%'}}>
            <MenuList>
                <Typography sx={{
                   fontSize: "18px",
                   fontWeight: "bold",
                   fontFamily: "Jost, sans-serif",
                   lineHeight: "30px",
                   textTransform: "none",
                   color: "#222",
                    }}
                >Filter by category</Typography>
                <MenuItem>
                    <ListItemText sx={ sxMenu }>Appliances</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        +
                    </Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemText sx={ sxMenu }>Decor & Pillows</ListItemText>
                    
                </MenuItem>
                <MenuItem>
                    <ListItemText sx={ sxMenu }>Baby & Kids</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        +
                    </Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText sx={ sxMenu }>Offices</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        +
                    </Typography>
                    </MenuItem>
                    <MenuItem>
                    <ListItemText sx={ sxMenu }>Kitchen</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                        +
                    </Typography>
                </MenuItem>
                <Divider />
                <Typography sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "Jost, sans-serif",
                    lineHeight: "30px",
                    textTransform: "none",
                    color: "#222",
                    '&:hover': { bgcolor: "transparent", color: "#a20401" }
                }}>Filter by price</Typography>
                <MenuItem>
                    <ListItemText sx={ sxMenu }>Web Clipboard</ListItemText>
                </MenuItem>
                <Divider />
                <Typography sx={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    fontFamily: "Jost, sans-serif",
                    lineHeight: "30px",
                    textTransform: "none",
                    color: "#222",
                    '&:hover': { bgcolor: "transparent", color: "#a20401" }
                }}>Brands</Typography>
                <MenuItem>
                    <ListItemText sx={ sxMenu }>Brand 1</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText sx={ sxMenu }>Brand 2</ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText sx={ sxMenu }>Brand 3</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}

export default Filter 