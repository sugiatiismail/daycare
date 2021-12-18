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


const Kirimmasukkan = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff', padding: 10 }}>
            <Container fullWidth >
                <Grid container>
                <Grid item lg={6} md={6} xs={12} xm={12}>
                        <Stack spacing={2}>
                            <Typography align="center" marginLeft={-50} style={{ fontFamily: 'sans-serif', fontWeight: 600, color:'#071e55' }} variant="h5">Kirim Masukan</Typography>
                            <TextField
                                component={Paper}
                                placeholder="Nama Lengkap"
                                sx={{ width: 500 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                placeholder="Alamat Email"
                                sx={{ width: 500 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                placeholder="No HP"
                                sx={{ width: 500 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                id="outlined-multiline-static"
                                placeholder="Isi Pesan..."
                                multiline
                                rows={9}
                                sx={{ width: 500 }}
                            />
                        </Stack>
                        <Button sx={{ marginTop: 1 }} variant="contained" size="success">
                            Kirim Masukan
                        </Button>
                    </Grid>

                    <Grid item lg={6} md={6} xs={12} xm={12}>
                        <Typography align="center" marginLeft={-38} style={{ fontFamily: 'sans-serif', fontWeight: 600, color:'#071e55' }} variant="h5">Lokasi Hasanah Islamic Daycare</Typography>
                        <Stack
                            marginTop={2}
                            marginLeft={-6}
                            marginBottom={2}
                            component={Paper}
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            p={3}
                            height={250}
                            elevation={3}
                        >
                            <img src={map} alt="map" style={{marginTop: 18, height: 270 }} />

                        </Stack>
                        <Typography marginBottom={2} marginLeft={-6}  variant="h6" color="initial">Alamat Daycare</Typography>
                        <Stack spacing={1} marginLeft={-6} marginBottom={-2}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <LocationOnIcon sx={{color:'#1e90ff', fontSize:19}}/>
                            <Typography align="center"  style={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize:17, marginLeft:4 }} >Jl Pertanian No 10, Jaya Mukti</Typography>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <DraftsIcon sx={{color:'#1e90ff', fontSize:19}} />
                            <Typography align="center"  style={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize:17, marginLeft:5 }} >office@smart.co.uk</Typography>
                        </div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}>
                            <PhoneIcon sx={{color:'#1e90ff', fontSize:19}} />
                            <Typography align="center"  style={{ fontFamily: 'sans-serif', fontWeight: 400, fontSize:16, marginLeft:4 }} >+62 987 654 321</Typography>
                        </div>
                        </Stack>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Kirimmasukkan