import React from "react";
import testi from '../image/testimonials3.jpg';


import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import CampaignIcon from '@mui/icons-material/Campaign';


const Baristiga = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container fullWidth >
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    < Grid item xs={6} >
                        <img src={testi} className="App-logo" alt="testi" />
                    </Grid>
                    <Grid item xs ={6} >
                        <CampaignIcon color="success" sx={{ fontSize: 70 }} />
                        <Typography variant="subtitle1">Nemo enimat ipsam voluptatem quia voluptas situm
                            ets aspernatis netsum loris fugit, sed quia magnitus honoratis
                            quis ratione sequi etum nets.</Typography>
                        <Typography variant="subtitle1" >JENNIFER SMITH — Designer @EpicThemes</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Baristiga