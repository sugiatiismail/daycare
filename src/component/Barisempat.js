
import { Typography } from "@mui/material"
import { Container } from "@mui/material"
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';


export default Barisempat;

function Barisempat() {

    var dataImage = [
        {
            id: 1,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner1.png",
            height:35
        },
        {
            id: 2,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner2.png",
            height:35
        },
        {
            id: 3,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner3.png",
            height:35
        },
        {
            id: 4,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner4.png",
            height:35
        },
        {
            id: 5,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner5.png",
            height:35
        }
    ];

    var dataImage2 = [
        {
            id: 1,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner6.png",
            height:35
        },
        {
            id: 2,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner7.png",
            height:35
        },
        {
            id: 3,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner9.png",
            height:35
        },
        {
            id: 4,
            image: "https://demo.epic-webdesign.com/tf-smart/v1/images/partner8.png",
            height:35
        }

    ];
        return (
            <Box sx={{  backgroundColor: '#f5f7fc',padding: 10 }}>
                <Typography sx={{marginBottom:9, marginTop:-10}} align="center" variant="h5" color="initial">Trusted By Over 9,000+ Businesses</Typography>
                <Container fullWidth maxWidth="md">
                    <Stack spacing={4} justifyContent="center" alignItems="center">
                        <Stack direction="row" spacing={5}>
                            {dataImage.map(item => (
                                <Paper key={item.id} sx={{ padding: 3 }}>
                                    <img src={item.image} alt="gambar-home" style={{ height: item.height}} />
                                </Paper>
                            ))}
                        </Stack>
                        <Stack direction="row" spacing={5}>
                            {dataImage2.map(item => (
                                <Paper key={item.id} sx={{ padding: 3 }}>
                                    <img src={item.image} alt="gambar-home" style={{ height: item.height}} />
                                </Paper>
                            ))}
                        </Stack>
                    </Stack>
                </Container>

            </Box>

        )
    }
