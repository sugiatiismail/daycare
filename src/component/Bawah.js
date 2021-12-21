import React from "react";


import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
// import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


import {
    createTheme,
 //   ThemeProvider,
} from '@mui/material/styles';

const Bawah = () => {
  //  const classes = useStyles();
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding:isDesktop ? 10 : 0, paddingTop:isDesktop ? 6 : 4, paddingBottom:isDesktop ? 4 : 4 }}>
            <Container fullWidth >
                <Grid container>
                    <Grid item lg={10} md={10} sm={12} xs={12}>
                    <Typography fontSize={isDesktop ? 20 : 15} paddingBottom={2} color="initial">© 2021 Smart. Designed by Ismail Halawa</Typography>
                    </Grid>

                    <Grid item lg md sm={12} xs={12}>
                        <Typography fontSize={isDesktop ? 20 : 15} color="initial">Ikuti kami</Typography>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Bawah