import React from "react";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { Typography } from "@mui/material"
import { Container } from "@mui/material"
import Stack from '@mui/material/Stack';

function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
}

const rows = [
    createData('Pendaftaran', 'Rp 100.000', 'Rp 100.000', 'Rp 100.000'),
    createData('Biaya Bulanan', 'Rp.850.000', 'Rp.750.000', 'Rp.500.000'),
    createData('Biaya Harian', 'Rp.50.000', 'Rp.30.000', 'Rp.25.000'),
    createData('Biaya Pembangunan', 'Rp.500.000', 'Rp.500.000', 'Rp.500.000'),
];


const Biyayapendaftaran = () => {
    return (
        <Box sx={{ backgroundColor: '#ffffff', padding: 10 }}>
            <Container fullWidth >
            <Typography align="center" marginBottom={10} style={{ fontFamily: 'sans-serif', fontWeight: 700 }}
                    variant="h4">Biaya Masuk Daycare</Typography>
                <Stack
                        component={Paper}
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        p={3}
                        elevation={3}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>SPP</TableCell>
                                <TableCell align="right">0-1 Tahun</TableCell>
                                <TableCell align="right">1-2 Tahun</TableCell>
                                <TableCell align="right">2-6 Tahun</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Stack>
            </Container>
        </Box>

    )
}

export default Biyayapendaftaran