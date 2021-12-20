import React from "react";
import salwa from '../image/salwaa.png';


import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import CheckIcon from '@mui/icons-material/Check';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

const Hasanahislamicdaycare = () => {
    const classes = useStyles();
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));


    return (
        <Box className={classes.boxOne}
        // sx={{ backgroundColor: '#f5f7fc', padding: 6, height: 600 }} marginTop={6} 
        >
            <Container >
                <Grid container spacing={2} marginTop={4} justifyContent="center" alignItems="center" >

                    <Grid item lg={7} md={7} sm={12} xs={12}>
                        <Stack spacing={2}>
                            <Typography className={classes.title1} >Hasanah Islamic Daycare</Typography>
                            <Typography variant="h5" >Mengasihi, Menyayangi, Sepenuh Hati</Typography>
                            <Stack direction={isDesktop ? 'row' : 'column'} spacing={0.3}>
                                <TextField id="filled-basic" 
                                // sx={{ width: 370 }} 
                                placeholder="Enter Your Email Adress" variant="standard" InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <MailOutlineIcon />
                                        </InputAdornment>
                                    ),
                                }} />
                                <Button color="error" variant="contained">Daftar Sekarang</Button>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <Box display='flex' alignItems='center'>
                                    <CheckIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                                    <Typography variant='body2'> Penitipan Anak Berbasis Islami </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                                    <Typography variant='body2'> Bermain Sambil Belajar </Typography>
                                </Box>
                            </Stack>
                        </Stack>

                    </Grid>

                    <Grid item lg={5} md={5} sm={12} xs={12}>
                        <img src={salwa} alt="salwa"className={classes.image} />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Hasanahislamicdaycare


const useStyles = makeStyles(theme => ({

    boxOne: {
        backgroundColor: '#f5f7fc',

        [theme.breakpoints.up('sm')]: {
            padding: 10,
            height: 700
        },

        [theme.breakpoints.down('sm')]: {
            paddingTop: 20,
            padding: 1,
            height: 750
        },
    },

    image: {
        marginTop: 40,
        [theme.breakpoints.up('sm')]: {
          height: 400
        },
        [theme.breakpoints.down('sm')]: {
            height: 250,
            marginTop: -10
          },
        },

        title1: {
            fontFamily: 'sans-serif',
            fontWeight: 700,
            color: '#212121',
            fontSize: 43,
            [theme.breakpoints.up('sm')]: {
                lineHeight: 1.5
            },
            [theme.breakpoints.down('sm')]: {
                lineHeight: 1.3

              },
            }

}));

