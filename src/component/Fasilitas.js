import React from "react";
import ruangan from '../image/ruangan.jpg';


import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';

import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
} from '@mui/material/styles';

const Fasilitas = () => {
    const classes = useStyles();
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{ backgroundColor: '#f5f7fc'}} padding={isDesktop ? 10 : 2} marginTop={isDesktop ? 14 : 10}  paddingBottom={isDesktop ? 0 : 10} >
            <Container fullWidth >
                <Typography align="center" marginBottom={isDesktop ? 10 : 6}  marginTop={isDesktop ? 4 : 6} style={{ fontFamily: 'sans-serif', color: '#071e55' }} fontWeight={isDesktop ? 700 : 650} fontSize={isDesktop ? 35 : 32}
                >Fasilitas</Typography>
                <Grid container spacing={6}>
                    <Grid item lg={7} md={7} sm={12} xs={12}>

                        <Stack marginBottom={2} spacing={1}>
                            <ThemeProvider theme={theme}>
                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Lingkungan yang aman dan nyaman </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Taman bermain edukatif </Typography>
                                </Box>


                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Al-quran learning </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Berkisah Rasulullah </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Kamar tidur full AC </Typography>
                                </Box>


                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Pembimbing dan pengasuh yang berpengalaman </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Pengenalan huruf hijaiyah </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'> Pengenalan bacaan dan gerakan sholat </Typography>
                                </Box>


                                <Box display='flex' alignItems='center'>
                                    <CheckIcon color="success" sx={{ fontSize: 35, marginRight: 1 }} />
                                    <Typography variant='h5'>Aktivitas sensori dan motorik</Typography>
                                </Box>
                            </ThemeProvider>

                        </Stack>
                    </Grid>
                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            // height={647}
                            elevation={3}
                        >
                            <img src={ruangan} alt="ruangan" className={classes.image1} />
                        </Stack>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Fasilitas

const useStyles = makeStyles(theme => ({

    image1: {
        borderRadius: 10,
        [theme.breakpoints.up('sm')]: {
            height: 320
        },
        [theme.breakpoints.down('sm')]: {
            height: 200,
        },
    },

}));
