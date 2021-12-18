import React from "react";


import Box from '@mui/material/Box';
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/material";


const Bawah = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container fullWidth >
                <Grid container>
                    <Grid item xs={10}>
                    <Typography variant="h6" color="initial">© 2021 Smart. Designed by Ismail Halawa</Typography>
                    </Grid>

                    <Grid item xs>
                        <Typography variant="h6" color="initial">Ikuti kami</Typography>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Bawah