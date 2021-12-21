import React from "react";
import packagedaycare from '../image/packagedaycare.png';
import paruhwaktu from '../image/paruhwaktu.png';


import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material"
import { Container } from "@mui/material";

import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


import {
    createTheme,
    ThemeProvider,
} from '@mui/material/styles';




function Layanankami() {

    const classes = useStyles();
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{ backgroundColor: '#f5f7fc'}} padding={isDesktop ? 2 : 2}  marginBottom={isDesktop ? 4 :2}  paddingBottom={isDesktop ? 16 :10}>
            <Container >
                <ThemeProvider theme={theme}>
                    <Typography align="center" marginBottom={isDesktop ? 10 : 6}  marginTop={isDesktop ? 6 : -1} style={{ color: '#071e55', fontFamily: 'sans-serif' }}
                        fontWeight={isDesktop ? 700 : 650} fontSize={isDesktop ? 35 : 32}>Layanan Kami</Typography>
                    <Grid container  justifyContent="center" alignItems="center" >
                        <Grid item lg={6} md={6} xs={12} xm={12}>
                            <Stack
                                p={3}
                                elevation={3}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Paper className={classes.paper}  sx={{p:2}} >         
                                <img src={packagedaycare} alt="packagedaycare" className={classes.image} />
                                </Paper>
                            </Stack>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} xm={12}>
                            <Stack
                                p={3}
                                elevation={3}
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Paper className={classes.paper}  sx={{p:2}} >  
                                <img src={paruhwaktu} alt="paruhwaktu" className={classes.image} />
                                </Paper>
                            </Stack>
                        </Grid>
                    </Grid >
                </ThemeProvider>
            </Container>
        </Box >

    )
}




export default Layanankami

const useStyles = makeStyles(theme => ({

    image: {
        [theme.breakpoints.up('sm')]: {
            height: 450
        },
        [theme.breakpoints.down('sm')]: {
            height: 300
        },
    },

    paper: {
        [theme.breakpoints.up('sm')]: {
            height: 450,
            width: 450
        },
        [theme.breakpoints.down('sm')]: {
            height: 300,
            width : 300
        },
    },


}));

