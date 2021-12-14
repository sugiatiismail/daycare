import React from "react";


import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';



const Baristujuh = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff', padding: 10 }}>
            <Container maxWidth="md" sx={{ height: '100vh' }}>
                <Typography marginBottom={10} align="center" variant="h3">Meet Our Team</Typography>

                <Stack spacing={12} direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={4}    >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/team001.jpg" alt="gambar-home" style={{ height: 350}} />
                            <Typography align="center" variant="h6">Christina Hawkings</Typography>
                            <Typography align="center" variant="body1">Head of SEO</Typography>
                            <Typography align="center" variant="body1">Johnathan is our co-founder and has developed search strategies for a variety of clients for over 5 years.</Typography>
                            <Stack direction="row">
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={4} >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/team002.jpg" alt="gambar-home" style={{ height: 350 }} />
                            <Typography align="center" variant="h6">Christina Hawkings</Typography>
                            <Typography align="center" variant="body1">Head of SEO</Typography>
                            <Typography align="center" variant="body1">Johnathan is our co-founder and has developed search strategies for a variety of clients for over 5 years.</Typography>
                            <Stack direction="row">
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={4} >
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/team003.jpg" alt="gambar-home" style={{ height: 350 }} />
                            <Typography align="center" variant="h6">Christina Hawkings</Typography>
                            <Typography align="center" variant="body1">Head of SEO</Typography>
                            <Typography align="center" variant="body1">Johnathan is our co-founder and has developed search strategies for a variety of clients for over 5 years.</Typography>
                            <Stack direction="row">
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                            </Stack>
                        </Stack>
                    </Grid>
                </Stack>
            </Container >
        </Box >

    )
}

export default Baristujuh