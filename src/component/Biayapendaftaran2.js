import React from "react";



import Box from '@mui/material/Box'
import { Typography } from "@mui/material"
import { Container } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    createTheme,
} from '@mui/material/styles';


const Biayapendaftaran2 = () => {
    const theme = createTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Box sx={{ backgroundColor: '#f5f7fc', paddingBottom:isDesktop ? 18 : 6, paddingTop:isDesktop ? 8 : 8 }}>
            <Container fullWidth >
                <Typography align="center" marginBottom={isDesktop ? 10 : 6} marginTop={isDesktop ? 6 : -1} style={{ color: '#071e55', fontFamily: 'sans-serif' }}
                    fontWeight={isDesktop ? 700 : 650} fontSize={isDesktop ? 35 : 32}>Biaya Masuk Daycare</Typography>
                    <div style={{overflowX:"auto"}}>
                    <table id="customers" border="1" >
                        <thead>
                            <tr>
                                <th>SPP</th>
                                <th>0-1 Tahun</th>
                                <th>1-2 Tahun</th>
                                <th>2-6 Tahun</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>Pendaftaran</td>
                            <td>Rp 100.000</td>
                            <td>Rp 100.000</td>
                            <td>Rp 100.000</td>
                        </tr>
                        <tr>
                            <td>Biaya Bulanan</td>
                            <td>Rp.850.000</td>
                            <td>Rp.750.000</td>
                            <td>Rp.500.000</td>
                        </tr>
                        <tr>
                            <td>Biaya Harian</td>
                            <td>Rp.50.000</td>
                            <td>Rp.30.000</td>
                            <td>Rp.25.000</td>
                        </tr>
                        <tr>
                            <td>Biaya Pembangunan</td>
                            <td>Rp.500.000</td>
                            <td>Rp.500.000</td>
                            <td>Rp.500.000</td>
                        </tr>
                    </table>
                    </div>
            </Container>
        </Box>

    )
}

export default Biayapendaftaran2



