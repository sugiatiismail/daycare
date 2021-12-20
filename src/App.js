import * as React from 'react';
import hasanah from './image/logoaja.png';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hasanahislamicdaycare from "./component/Hasanahislamicdaycare"
import Programunggulan from "./component/Programunggulan"
import Fasilitas from "./component/Fasilitas"
import Layanankami from './component/Layanankami';
import Pendaftaran from './component/Pendaftaran';
import Biayapendaftaran2 from './component/Biayapendaftaran2';
import Kirimmasukkan from './component/Kirimmasukkan';
import Bawah from './component/Bawah';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
require('./../src/App.css');



const pages = ['Beranda', 'Program', 'Galeri', 'Tim Kami', 'Tentang', 'Kontak'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const App = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (

    <div >
      <AppBar color='inherit' >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <img src={hasanah} alt="hasanah" style={{ height: 40 }} />
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography variant='h6' textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Button color="inherit" variant="text" >Login</Button>
            <Button variant="contained" color="success">Sign-up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Router>
        <Switch>
          <Route exact path="/">
            <index />
          </Route>
        </Switch>
      </Router>

      <Hasanahislamicdaycare />
      <Programunggulan />
      <Fasilitas />
      <Layanankami />
      <Pendaftaran />
       {/* <Biayapendaftaran2 />
      <Kirimmasukkan />
      <Bawah /> */}

    </div>

  );
};
export default App;
