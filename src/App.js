import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Barissatu from "./component/Barissatu"
import Barisdua from "./component/Barisdua"
import Baristiga from "./component/Baristiga"
import Barisempat from "./component/Barisempat"
import Barislima from "./component/Barislima"
import Barisenam from "./component/Barisenam"
import Baristujuh from "./component/Baristujuh"
import Barisdelapan from "./component/Barisdelapan"
import Barissembilan from "./component/Barissembilan"
import MeetOurTeam from "./component/MeetOurTeam"



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

    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <index />
          </Route>
        </Switch>
      </Router>
      <AppBar color='inherit' >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography>
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
            <Button  variant="contained" color="success">Sign-up</Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Barissatu />
      <Barisdua />
      <Baristiga />
      <Barisempat />
      <Barislima />
      <Barisenam />

      <MeetOurTeam />

      <Baristujuh />
      <Barisdelapan />
      <Barissembilan />
    </div>

  );
};
export default App;
