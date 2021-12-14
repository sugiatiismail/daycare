import React from "react";
import uidesign from '../image/fotocontoh.png';


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

const Barisdelapan = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container fullWidth>
                <Grid container spacing={8} justifyContent="center" alignItems="center">
                    < Grid item xs={6}   >
                        <Stack spacing={2}>
                            <Typography variant="h4">How It Works.</Typography>
                            <Typography variant="body2" >Quis autem velis ets reprehender net etid quiste netsum voluptate. Utise wisi enim minim veniam, quis etsad ets aspernatis netsum stationes nets qualitats.</Typography>
                            <Stack
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                                spacing={2}
                            >
                                <Stack>
                                    <Typography variant="h5" color="initial">LinkedIn</Typography>
                                    <Stack direction="row">
                                        <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                        <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                        <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                        <StarIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                        <StarHalfIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="warning" />
                                    </Stack>
                                </Stack>
                                <Stack>
                                    <Typography variant="h5" color="initial">Upwork</Typography>
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
                    <Grid item xs={6}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <IconButton sx={{ border: 1, marginRight: 1}} color="primary" aria-label="upload picture" component="span">
                                    <CreateIcon/>
                                </IconButton>
                                <Typography variant="h6">Create Account</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    This is the first item's accordion body. It is hidden by default, until the collapse plugin adds
                                    the appropriate classes that we use to style each element. These classes control the style.
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
                                <Typography variant="h6">Choose Package</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    This is the first item's accordion body. It is hidden by default, until the collapse plugin adds
                                    the appropriate classes that we use to style each element. These classes control the style.
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
                                <Typography variant="h6">Enjoy Smart</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    This is the first item's accordion body. It is hidden by default, until the collapse plugin adds
                                    the appropriate classes that we use to style each element. These classes control the style.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Barisdelapan