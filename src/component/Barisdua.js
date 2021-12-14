import React from "react";


import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import Paper from '@mui/material/Paper';
import CampaignIcon from '@mui/icons-material/Campaign';
import DiamondIcon from '@mui/icons-material/Diamond';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';



const Barisdua = () => {
    return (
        <Box sx={{ backgroundColor: '#fff', padding: 10 }}>
            <Container>
                <Typography align="center" variant="h3">Program Unggulan</Typography>

                <Grid container spacing={2} marginTop={10} justifyContent="center" alignItems="center" >

                    < Grid item xs={6}   >
                            <Stack
                            component={Paper}
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                                p={3}
                                elevation={3}
                            >
                                <CampaignIcon color="success" sx={{ fontSize: 70 }} />
                                <Typography align="center" variant="h6">Baby Daycare usia 3 bulan - 2 tahun</Typography>
                                <Typography align="center" variant="body1">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</Typography>
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
                                <DiamondIcon color="error" sx={{ fontSize: 70 }} />
                                <Typography align="center" variant="h6">Toodle Fullday usia 2 tahun - 5  tahun</Typography>
                                <Typography align="center" variant="body1">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</Typography>
                            </Stack>
                    </Grid>
                </Grid>
            </Container >
        </Box>

    )
}

export default Barisdua