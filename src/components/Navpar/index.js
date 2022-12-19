import * as React from 'react';
import styles from './styles.module.css';
// import styles from './styles.module.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import {AiOutlineHeart  } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import {AiOutlineShopping } from "react-icons/ai";
import { MdKeyboardArrowDown} from "react-icons/md";
import Login from '../Login';


const menuItems = ["shop" ,"fabric", "journal", "about"];
const settings=[<AiOutlineSearch /> ,<AiOutlineHeart />,<AiOutlineShopping />]
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl"
      sx={{
        backgroundColor:'white'
      }}
       
       >
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 400,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
matter         
 </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none',color:'black' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='black'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none',color:'bl' },
              }}
            >
              {menuItems.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
          className={styles.matter}
            variant="h5"
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
              color: 'black',
              textDecoration: 'none',
            }}
          >
            matter
          </Typography>
          <Box 
          className={styles.box1}
          sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((page) => (
                <>
              <Button
              className={styles.button}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: 'black', display: 'block' ,fs:'10'}}
              >
               <p className={styles.page}>{page}</p> 
              </Button>
              <p className={styles.down}><MdKeyboardArrowDown/></p>

              </>
            ))}
          </Box>
          <Login/>
        <Box sx={{ flexGrow: 0 }}>
          
      <div className={styles.rightdiv}>
      {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
    </div>
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
