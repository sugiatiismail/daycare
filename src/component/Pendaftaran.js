import React from "react";


import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Divider from '@mui/material/Divider';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';


import useMediaQuery from '@mui/material/useMediaQuery';


import {
    createTheme,
    ThemeProvider,
} from '@mui/material/styles';


function Pendaftaran() {

    // const classes = useStyles();
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));



    return (
        <Box sx={{ backgroundColor: '#ffffff'}} padding={isDesktop ? 10 : 1}>
            <Container fullWidth>
                <ThemeProvider theme={theme}>
                    <Typography align="center" marginBottom={isDesktop ? 10 : 6} marginTop={isDesktop ? 0 : 6} style={{ fontFamily: 'sans-serif', color: '#071e55' }} fontWeight={isDesktop ? 700 : 650} variant={isDesktop ? 'h4' : 'h5'}>Pendaftaran</Typography>
                    <Grid container spacing={8} justifyContent="center" alignItems="center">
                        <Grid item lg={6} md={6} xs={12} xm={12}>
                            <Stack spacing={2}>
                                <Typography align="center" style={{ fontFamily: 'sans-serif', fontWeight: 600, color: '#071e55' }} variant={isDesktop ? 'h5' : 'h6'}>Cara Mendaftar</Typography>
                                <Typography variant="body2" >Untuk mendaftarkan peserta didik bisa melalui online atau pun langsung datang ke Hasanah Islamic Daycare</Typography>
                                <Stack
                                    direction="row"
                                    divider={<Divider orientation="vertical" flexItem />}
                                    spacing={2}
                                >
                                    <Stack>
                                        <Typography variant="h5" color="initial">Online</Typography>
                                        <Stack direction="row">
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarHalfIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                        </Stack>
                                    </Stack>
                                    <Stack>
                                        <Typography variant="h5" color="initial">Offline</Typography>
                                        <Stack direction="row">
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                            <StarOutlineIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                        </Stack>
                                    </Stack>
                                </Stack>

                            </Stack>
                        </Grid>
                        <Grid item lg={6} md={6} xs={12} xm={12}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                        <CreateIcon />
                                    </IconButton>
                                    <Typography variant="h6">Langkah Mendaftar</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        1. Hubungi contact person
                                    </Typography>
                                    <Typography>
                                        2. Mengambil formulir
                                    </Typography>
                                    <Typography>
                                        3. Mengisi dan mengembalikan formulir
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                        <CreateIcon />
                                    </IconButton>
                                    <Typography variant="h6">Persyaratan</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        1. Membayar uang pendaftaran 100.000
                                    </Typography>
                                    <Typography>
                                        2. Fotokopi akte kelahiran 3 lbr
                                    </Typography>
                                    <Typography>
                                        3. Fotokopi KK 3 lbr
                                    </Typography>
                                    <Typography>
                                        4. Fotokopu kartu BPJS 3 lbr
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                        <CreateIcon />
                                    </IconButton>
                                    <Typography variant="h6">Kontak Kami</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        HP : 082387822696
                                    </Typography>
                                    <Typography>
                                        Alamat: Jl.pertanian no 30, Jayamukti. Dumai
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </Container>
        </Box >
    )
}

export default Pendaftaran