import React from "react";
import map from '../image/map.png';

import Box from '@mui/material/Box';
import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DraftsIcon from '@mui/icons-material/Drafts';
import PhoneIcon from '@mui/icons-material/Phone';
import { makeStyles } from '@mui/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


import {
    createTheme,
} from '@mui/material/styles';



const Kirimmasukkan = () => {
    const classes = useStyles();
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{ backgroundColor: '#ffffff', padding: isDesktop ? 10 : 2 }}>
            <Container fullWidth >
                <Grid container spacing={isDesktop ? 16 : 6} alignItems='center' justifyContent='center'>
                    <Grid item lg={6} md={6} xs={12} xm={12} sx={{ spacing: 4 }}>
                        <Stack spacing={2} alignItems='center' justifyContent='center'>
                            <Typography align="center" marginLeft={isDesktop ? -50 : 0} style={{ fontFamily: 'sans-serif', fontWeight: 600, color: '#071e55' }} variant="h5">Kirim Masukan</Typography>
                            <TextField
                                component={Paper}
                                alignItems='center'
                                justifyContent='center'
                                placeholder="Nama Lengkap"
                                sx={{ width: isDesktop ? 560 : 340 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                placeholder="Alamat Email"
                                sx={{ width: isDesktop ? 560 : 340 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                placeholder="No HP"
                                sx={{ width: isDesktop ? 560 : 340 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                id="outlined-multiline-static"
                                placeholder="Isi Pesan..."
                                multiline
                                rows={9}
                                sx={{ width: isDesktop ? 560 : 340 }}
                            />
                        </Stack>
                            <Button sx={{ marginTop: isDesktop ? 2 : 2, marginLeft: isDesktop ? -3 : -3.5 }} variant="contained" size="success">
                                Kirim Masukan
                            </Button>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} xm={12}>
                        <Typography align="center" marginLeft={isDesktop ? -38 : 0} style={{ fontFamily: 'sans-serif', fontWeight: 600, color: '#071e55' }} variant={isDesktop ? 'h5' : 'h6'}>Lokasi Hasanah Islamic Daycare</Typography>
                        <Stack
                            marginTop={2}
                            marginLeft={isDesktop ? -6 : 0}
                            marginBottom={2}
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            p={3}
                            height={isDesktop ? 250 : 120}
                            elevation={3}
                        >
                            <Paper className={classes.paper} sx={{ p: 2 }} >
                                <img src={map} alt="map" className={classes.image} />
                            </Paper>


                        </Stack>
                        <Typography marginBottom={2} marginLeft={isDesktop ? -6 : 0} variant="h6" color="initial">Alamat Daycare</Typography>
                        <Stack spacing={1} marginLeft={isDesktop ? -6 : 0} marginBottom={-2}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <LocationOnIcon sx={{ color: '#1e90ff', fontSize: 19 }} />
                                <Typography align="center" style={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize: 17, marginLeft: 4 }} >Jl Pertanian No 10, Jaya Mukti</Typography>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <DraftsIcon sx={{ color: '#1e90ff', fontSize: 19 }} />
                                <Typography align="center" style={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize: 17, marginLeft: 5 }} >office@smart.co.uk</Typography>
                            </div>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                            }}>
                                <PhoneIcon sx={{ color: '#1e90ff', fontSize: 19 }} />
                                <Typography paddingBottom={2} align="center" style={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize: 16, marginLeft: 4 }} >+62 987 654 321</Typography>
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Kirimmasukkan

const useStyles = makeStyles(theme => ({

    image: {
        [theme.breakpoints.up('sm')]: {
            height: 270
        },
        [theme.breakpoints.down('sm')]: {
            height: 140
        },
    },

    paper: {
        [theme.breakpoints.up('sm')]: {
            height: 280,
            width: 570
        },
        [theme.breakpoints.down('sm')]: {
            height: 280,
            width: 300
        },
    },


}));

