import React from "react";
import baby1 from '../image/baby1.png';
import baby2 from '../image/baby2.png';


import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import ChildCareTwoToneIcon from '@mui/icons-material/ChildCareTwoTone';


const Programunggulan = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', padding: 10 }}>
            <Container>
                <Typography  align="center" style={{fontFamily: 'sans-serif',fontWeight: 700}} variant="h4">Program Unggulan</Typography>
                <Grid container spacing={2} marginTop={10} justifyContent="center" alignItems="center" >

                    < Grid item xs={6}   >
                        <Stack
                            component={Paper}
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            p={3}
                            height={647}
                            elevation={3}
                        >
                            <img src={baby1} className="App-logo" alt="baby1" style={{ marginTop:-95 , height: 80 }} />
                            <Typography align="center" variant="h6">Baby Daycare usia 3 bulan - 12 Bulan</Typography>
                            <Stack marginBottom={2} spacing={1}>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 07:00 s.d 08:00  :	Kehadiran anak </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 07:00 s.d 08:00 : Mendengar murotal juz 30</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 08:00 s.d 08:30 :	Sarapan</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 08:30 s.d 09:00 :	Pengenalan huruf hijaiyah </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 09:00 s.d 09:30 :	Mendengar kisah Rasulullah </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 09:30 s.d 11.30 :	ASI + tidur </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 11:30 s.d 12:00	Tummy time </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 12:00 s.d 13.00 :	Sensory play </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'>13:00 s.d 13.30 :	Pengenalan huruf hijaiyah</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 13:30 s.d 15:00	: ASI + tidur </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 15:00 s.d 15:30	: Mandi </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'>15:30 s.d 16:00 :	ASI </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 16:00 s.d 16:30	: Menunggu jemputan </Typography>
                                </Box>

                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={6} >
                        <Stack
                            component={Paper}
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            p={3}
                            elevation={3}
                        >
                            <img src={baby2} className="App-logo" alt="baby2" style={{ height: 80 }} />
                            <Typography align="center" variant="h6">Toodle Fullday usia 1 tahun - 5  tahun</Typography>
                            <Stack marginBottom={2} spacing={1}>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 07:00 s.d 08:00  :	Kehadiran anak </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 07:00 s.d 08:00 : Mendengar murotal juz 30</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 08:00 s.d 08:30 :	Sarapan</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 08:30 s.d 09:00 :	Pengenalan huruf hijaiyah </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 09:00 s.d 09:30 :	Mendengar kisah Rasulullah </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 09:30 s.d 10.30 :	Sensory play </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 10:30 s.d 11.00 :	Bersih bersih </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 11:00 s.d 11.15 :	Sholat dhuha </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'>11:15 s.d 12.30	 : Tidur siang</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 12:30 s.d 13:00 :	Sholat dzhuhur </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 13:00 s.d 13:30 :	Makan siang </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'>13:30 s.d 14:30 :	Bermain bebas</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 14:30 s.d 15:30 :	Tidur siang </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'> 15:30 s.d 15:45 :	Sholat ashar </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'>15:45 s.d 16:00 :	Mandi sore</Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <ChildCareTwoToneIcon color="success" />
                                    <Typography marginLeft={1} variant='body1'>16:00 s.d 16:30 :	Menunggu jemputan</Typography>
                                </Box>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container >
        </Box>

    )
}

export default Programunggulan