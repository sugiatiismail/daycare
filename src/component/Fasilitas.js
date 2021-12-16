import React from "react";
import ruangan from '../image/ruangan.jpg';


import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';


const Fasilitas = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container fullWidth >
                <Typography align="center" variant="h4" marginBottom={10}>Fasilitas</Typography>
                <Grid container>
                    <Grid item xs={7}>

                        <Stack marginBottom={2} spacing={1}>

                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Lingkungan yang aman dan nyaman </Typography>
                            </Box>

                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Taman bermain edukatif </Typography>
                            </Box>


                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Al-quran learning </Typography>
                            </Box>

                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Berkisah Rasulullah </Typography>
                            </Box>

                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Kamar tidur full AC </Typography>
                            </Box>


                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Pembimbing dan pengasuh yang berpengalaman </Typography>
                            </Box>

                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Pengenalan huruf hijaiyah </Typography>
                            </Box>

                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'> Pengenalan bacaan dan gerakan sholat </Typography>
                            </Box>


                            <Box display='flex' alignItems='center'>
                                <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                                <Typography variant='h5'>Aktivitas sensori dan motorik</Typography>
                            </Box>


                        </Stack>
                    </Grid>
                    <Grid item xs={4} >
                        <img src={ruangan} className="App-logo" alt="ruangan" style={{ height: 320, borderRadius: 10 }} />
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Fasilitas