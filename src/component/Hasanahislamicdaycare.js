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

const Hasanahislamicdaycare = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 6 }} marginTop={6} marginBottom={-8}>
            <Container >
                <Grid container spacing={2} marginTop={4} justifyContent="center" alignItems="center" >
                    < Grid item xs={7}   >
                        <Stack spacing={2}>
                            <Typography style={{fontFamily: 'sans-serif',fontWeight: 700}} variant="h3">Hasanah Islamic Daycare</Typography>
                            <Typography variant="h5" >Mengasihi, Menyayangi, Sepenuh Hati</Typography>
                            <Stack direction="row" spacing={0.3}>
                                <TextField id="filled-basic" sx={{ width: 370 }} placeholder="Enter Your Email Adress" variant="standard" InputProps={{
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
                    <Grid item xs={5}>
                        <img src={salwa} className="App-logo" alt="salwa"  style={{ marginLeft:-80,height: 450 }} />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Hasanahislamicdaycare