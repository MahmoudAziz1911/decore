import { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useContext } from 'react';
import { DataContext } from '@/store/GlobalState';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Badge
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const pages = [
  {
    title: "shop",
    path: "/shop"
  }, {
    title: "products",
    path: "/products"
  },
  {
    title: "categories",
    path: "/categories"
  }, {
    title: "signUp",
    path: "/register"
  }
  , {
    title: "signIn",
    path: "/signin"
  }
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MainNavigation() {
  const { data: session } = useSession();
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#a20401" }}>
      <Container>
        <Toolbar disableGutters>
          {/* <Avatar
            src="/images/logo.jpg"
            alt=''
            variant="rounded"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, mixBlendMode: "color-burn" }}
          /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FASHION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  href={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ color: '#222', fontSize: '14px', fontWeight: "500", display: 'block' }}
                >
                  {page.title}
                </Button>
              ))}
              <Button href="/shoppingCart" sx={{ color: '#222', fontSize: '14px', fontWeight: "500", display: 'block' }}> Cart 0</Button>
            </Menu>
          </Box>
          {/*           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
 */}          <Avatar
            src="/images/logo.jpg"
            alt=''
            variant="rounded"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, mixBlendMode: "color-burn" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FASHION
          </Typography>
          <Box sx={{ justifyContent: "center", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page.title}
                href={page.path}
                onClick={handleCloseNavMenu}
                sx={{ color: '#fff', fontSize: '14px', fontWeight: "500", display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
            <Button href="/shoppingCart" sx={{ color: '#222', fontSize: '14px', fontWeight: "500", display: 'block' }}>Cart {cart.length}</Button>
 */}

            {session && 
              <>
              <Button component={Link} href="/" sx={{ color: '#fff', fontSize: '14px', fontWeight: "500" }}
            >
              home page
            </Button>
              <Button component={Link} href="/shop" sx={{ color: '#fff', fontSize: '14px', fontWeight: "500" }}
            >
              Shop
            </Button>
            <Button component={Link} href="/categories" sx={{ color: '#fff', fontSize: '14px', fontWeight: "500" }}
            >
              categories
            </Button>
            <Button component={Link} href="/shoppingCart"
              sx={{ color: '#fff', fontSize: '14px', fontWeight: "500" }}
            >
              <Badge color="secondary" badgeContent={cart.length}>
                cart<ShoppingCartIcon />
              </Badge>
            </Button>
              </>
            }
            {!session && <>
              <Button component={Link} href="/signin"
              sx={{ color: '#fff', fontSize: '14px', fontWeight: "500" }}
            >
              log in
            </Button>
            <Button component={Link} href="/register"
              sx={{ color: '#fff', fontSize: '14px', fontWeight: "500" }}
            >
              register
            </Button>
            </>}
          </Box>
          {session && <>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={session.user.name} src={session.user.image} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {/* {settings.map((setting) => ( */}
                <MenuItem onClick={handleCloseUserMenu} >
                  <Button href="/profile">
                    Profile
                  </Button>
                  <Button href="/profile">
                    Settings
                  </Button>
                </MenuItem>

              </Menu>
            </Box>
          </>
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainNavigation;