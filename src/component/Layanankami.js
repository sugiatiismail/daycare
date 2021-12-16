import React from "react";
import packagedaycare from '../image/packagedaycare.png';
import paruhwaktu from '../image/paruhwaktu.png';


import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material"
import { Container } from "@mui/material";

export default Layanankami;

function Layanankami() {


    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container>
            <Typography align="center" variant="h4" marginBottom={10}>Layanan Kami</Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Stack
                        component={Paper}
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={3}
                        elevation={3}
                    >
                        <img src={packagedaycare} className="App-logo" alt="packagedaycare" style={{ height: 450 }} />
                    </Stack>
                </Grid>
                <Grid item xs={6}>
                    <Stack
                        component={Paper}
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={3}
                        elevation={3}
                    >
                        <img src={paruhwaktu} className="App-logo" alt="paruhwaktu" style={{ height: 450 }} />
                    </Stack>
                </Grid>
            </Grid >
            </Container>
        </Box >

    )
}










