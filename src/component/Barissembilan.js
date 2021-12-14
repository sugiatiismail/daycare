import React from "react";


import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import Paper from '@mui/material/Paper';
import CampaignIcon from '@mui/icons-material/Campaign';
import DiamondIcon from '@mui/icons-material/Diamond';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';



const Barissembilan = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff', padding: 10 }}>
            <Container maxWidth="lg" sx={{ height: '70vh' }}>
                <Typography align="center" variant="h3">How It Works</Typography>

                <Grid container alignItems="center" >

                    < Grid item xs={4} marginTop={20}   >
                        <Paper sx={{ marginTop: -5, height: 220, width: 350 }} backgroundColor="#90caf9" >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <CampaignIcon color="success" sx={{ fontSize: 70 }} />
                                <Typography align="center" variant="h6">Search Oportunities</Typography>
                                <Typography align="center" variant="body1">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</Typography>
                            </Stack>
                        </Paper>
                    </Grid>

                    <Grid item xs={4} >
                        <Paper sx={{ marginTop: 15, height: 220, width: 350 }} backgroundColor="#90caf9" >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <DiamondIcon color="error" sx={{ fontSize: 70 }} />
                                <Typography align="center" variant="h6">Reach Clients</Typography>
                                <Typography align="center" variant="body1">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</Typography>
                            </Stack>
                        </Paper>
                    </Grid>

                    <Grid item xs={4} >
                        <Paper sx={{ marginTop: 15, height: 220, width: 350 }} backgroundColor="#90caf9" >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={2}
                            >
                                <AvTimerIcon color="primary" sx={{ fontSize: 70 }} />
                                <Typography align="center" variant="h6">Get Rewarded</Typography>
                                <Typography align="center" variant="body1">Curabitur quamtis etsum lacus etsumis nulatis iaculis etsum vitae etsum ets nisle varius.</Typography>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Container >
        </Box>

    )
}

export default Barissembilan