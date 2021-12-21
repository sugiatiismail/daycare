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
        <Box sx={{ backgroundColor: 'ffffff', paddingTop: isDesktop ? 16 : 4, paddingBottom: isDesktop ? 16 : 8 }} >
            <Container >
                <Grid container spacing='2' justifyContent="center" alignItems="center">
                    <Grid item lg={6} md={6} xs={12} xm={12}>
                        <Stack spacing={2} alignItems='center'>
                            <Stack spacing={2} justifyContent='center' alignItems='flex-start' >
                                <Typography style={{ fontFamily: 'sans-serif', fontWeight: 600, color: '#071e55' }} variant="h5">Kirim Masukan</Typography>
                                <TextField
                                    component={Paper}
                                    alignItems='center'
                                    justifyContent='center'
                                    placeholder="Nama Lengkap"
                                    sx={{ width: isDesktop ? 550 : 310 }}
                                    multiline
                                    id="outlined-required"
                                />
                            </Stack>
                            <TextField
                                component={Paper}
                                placeholder="Alamat Email"
                                sx={{ width: isDesktop ? 550 : 310 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                placeholder="No HP"
                                sx={{ width: isDesktop ? 550 : 310 }}
                                multiline
                                id="outlined-required"
                            />
                            <Stack spacing={2} justifyContent='flex-start' alignItems='flex-start'>
                                <TextField
                                    component={Paper}
                                    id="outlined-multiline-static"
                                    placeholder="Isi Pesan..."
                                    multiline
                                    rows={10}
                                    sx={{ width: isDesktop ? 550 : 310 }}
                                />
                                <Button variant="contained" color="warning">
                                    Kirim Masukan
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} xm={12}>
                        <Stack
                            alignItems='center'
                            spacing={2}
                            elevation={3}
                        >
                            <Typography marginTop={isDesktop ? -6 : 4} style={{ fontFamily: 'sans-serif', fontWeight: 600, color: '#071e55' }} variant={isDesktop ? 'h5' : 'h6'}>Lokasi Hasanah Islamic Daycare</Typography>
                            <Paper className={classes.paper} sx={{ p: 2 }} >
                                <img src={map} alt="map" className={classes.image} />
                            </Paper>
                            <Stack spacing={1} justifyContent='flex-start' alignItems='flex-start' >
                                <Typography marginBottom={2} marginTop={2} variant="h6" color="initial">Alamat Daycare</Typography>
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
                                    <Typography align="center" style={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize: 17, marginLeft: 4 }} >+62 987 654 321</Typography>
                                </div>
                            </Stack>
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
            height: 260
        },
        [theme.breakpoints.down('sm')]: {
            height: 135
        },
    },

    paper: {
        [theme.breakpoints.up('sm')]: {
            height: 270,
            width: 550
        },
        [theme.breakpoints.down('sm')]: {
            height: 150,
            width: 280
        },
    },


}));

