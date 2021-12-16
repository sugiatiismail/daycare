import React from "react";


import Box from '@mui/material/Box';
import { Grid, Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';


const Kirimmasukkan = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container fullWidth >
                <Grid container>
                    <Grid item xs={6}>
                        <Stack spacing={2}>
                            <Typography sx={{fontSize:30, fontWeight:450}} color="initial">Kirim Masukan</Typography>
                            <TextField
                                component={Paper}
                                placeholder="Nama Lengkap"
                                sx={{ width: 500 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                placeholder="Alamat Email"
                                sx={{ width: 500 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                placeholder="No HP"
                                sx={{ width: 500 }}
                                multiline
                                id="outlined-required"
                            />
                            <TextField
                                component={Paper}
                                id="outlined-multiline-static"
                                placeholder="Isi Pesan..."
                                multiline
                                rows={8}
                                sx={{ width: 500 }}
                            />
                        </Stack>
                        <Button sx={{ marginTop: 1 }} variant="contained" size="success">
                            Kirim Masukan
                        </Button>
                    </Grid>

                    <Grid item xs={6} >
                        <Typography variant="h6" color="initial">Lokasi Hasanah Islamic Daycare</Typography>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default Kirimmasukkan