import React from "react";



import Box from '@mui/material/Box'
import { Typography } from "@mui/material"
import { Container } from "@mui/material"




const Biayapendaftaran2 = () => {
    return (
        <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
            <Container fullWidth >
                <Typography align="center" marginBottom={8} style={{ fontFamily: 'sans-serif', fontWeight: 700 , color:'#071e55' }}
                    variant="h4">Biaya Masuk Daycare</Typography>
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
            </Container>
        </Box>

    )
}

export default Biayapendaftaran2



