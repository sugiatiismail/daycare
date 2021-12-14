import React from "react";


import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';



const Barisenam = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container maxWidth="lg" sx={{ height: '30vh' }}>
                <Typography sx={{marginBottom:-4}} align="center" variant="h4">Fun Facts About Our Agency</Typography>

                <Grid container sx={{ height: '35vh' }}  justifyContent="center" alignItems="center">

                    < Grid item xs={2} >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <CardGiftcardIcon color="primary" sx={{ fontSize: 45 }} />
                                <Typography align="center" variant="h6">1050+</Typography>
                                <Typography align="center" variant="body1">Projects Completed</Typography>
                            </Stack>
                    </Grid>

                    <Grid item xs={2} >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <Typography align="center" variant="h6">217k</Typography>
                                <Typography align="center" variant="body1">Happy Clients</Typography>
                            </Stack>
                    </Grid>

                    <Grid item xs={2} >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <MilitaryTechIcon color="success" sx={{ fontSize: 45 }} />
                                <Typography align="center" variant="h6">1210</Typography>
                                <Typography align="center" variant="body1">Design Awards</Typography>
                            </Stack>
                    </Grid>

                    <Grid item xs={2} >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <RoomServiceIcon color="warning" sx={{ fontSize: 45 }} />
                                <Typography align="center" variant="h6">217k</Typography>
                                <Typography align="center" variant="body1">Happy Clients</Typography>
                            </Stack>
                    </Grid>

                    <Grid item xs={2} >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                spacing={0.5}
                            >
                                <WorkOutlineIcon color="warning" sx={{ fontSize: 45 }} />
                                <Typography align="center" variant="h6">2137</Typography>
                                <Typography align="center" variant="body1">Line Of Codes</Typography>
                            </Stack>
                    </Grid>

                </Grid>
            </Container >
        </Box>

    )
}

export default Barisenam