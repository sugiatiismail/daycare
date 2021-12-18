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
        <Box className={classes.box1}>
            <Container>
                <ThemeProvider theme={theme}>
                    <Typography align="center" marginBottom={10} marginTop={10} style={{ color: '#071e55', fontFamily: 'sans-serif' }}
                        fontWeight={isDesktop ? 700 : 650} variant={isDesktop ? 'h4' : 'h5'}>Layanan Kami</Typography>
                </ThemeProvider>
                <Grid container spacing={4} justifyContent="center" alignItems="center" >
                    <Grid item lg={6} md={6} xs={12} xm={12}>
                        <Stack
                            component={Paper}
                            justifyContent="center"
                            alignItems="center"
                            width={isDesktop ? 525 : 200}
                            marginLeft={isDesktop ? 0 : 3.5}
                            spacing={2}
                            p={3}
                            elevation={3}
                        >
                            <img src={packagedaycare} alt="packagedaycare" className={classes.image} />
                        </Stack>
                    </Grid>
                    <Grid item lg={6} md={6} xs={12} xm={12}>
                        <Stack
                            component={Paper}
                            justifyContent="center"
                            alignItems="center"
                            marginLeft={isDesktop ? 0 : 3.5}
                            width={isDesktop ? 525 : 200}
                            spacing={2}
                            p={3}
                            elevation={3}
                        >
                            <img src={paruhwaktu} alt="paruhwaktu" className={classes.image} />
                        </Stack>
                    </Grid>
                </Grid >
            </Container>
        </Box >

    )
}




export default Layanankami

const useStyles = makeStyles(theme => ({

    box1: {
        backgroundColor: '#f5f7fc',
        [theme.breakpoints.up('sm')]: {
            padding: 10
        },
        [theme.breakpoints.down('sm')]: {
            padding: 2
        },
    },

    image: {
        [theme.breakpoints.up('sm')]: {
            height: 450
        },
        [theme.breakpoints.down('sm')]: {
            height: 220
        },
    },

}));