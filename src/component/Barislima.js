
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';


export default Barislima;

function Barislima() {


    return (
        <>
            <Box sx={{ backgroundColor: '#ffffff', padding: 5 }}>
                <Container fullWidth>

                    <Grid container spacing={2} justifyContent="center" alignItems="center">

                        <Grid item xs={6}>

                            <Stack marginBottom={2} spacing={1}>

                                <Typography variant="h4" color="initial">Discover how we can help you to grow your business fast.</Typography>

                                <Typography variant="subtitle1" color="initial">Anticas quia voluptas sit aspernatur netsum demo ets ipsam voluptatem lorem fugit, seditum netis velas net nesciunt.</Typography>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                                    <Typography variant='body2'> Free 30-Day Trial </Typography>
                                </Box>

                                <Box display='flex' alignItems='center'>
                                    <CheckIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                                    <Typography variant='body2'> Money Back Guarantee </Typography>
                                </Box>

                                
                                <Box display='flex' alignItems='center'>
                                    <CheckIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                                    <Typography variant='body2'> Money Back Guarantee </Typography>
                                </Box>


                            </Stack>
                                
                            <Button
                                    size="large"
                                    variant="contained"
                                >Get Started</Button>
                        </Grid>


                        <Grid item xs={6}>
                            <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/digital-marketing.png" alt="gambar-home" style={{ height: 400, marginLeft: 70 }} />
                        </Grid>

                    </Grid>

                </Container>
            </Box>
        </>
    );
}