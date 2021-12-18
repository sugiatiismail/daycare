
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CheckIcon from '@mui/icons-material/Check';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

export default App;

function App() {


  return (
    <>
      <Box sx={{ backgroundColor: '#f5f7fc', padding: 10 }}>
        <Container fullWidth>

          <Grid container spacing={2} justifyContent="center" alignItems="center">

            <Grid item xs={7}>

              <Stack spacing={2}>

                <Typography variant="h3" color="initial">Discover The Wold's Most Advanced Online Tool</Typography>

                <Typography variant="subtitle1" color="initial">Track and analyze all your data in one central location.</Typography>


                <Stack direction="row" spacing={1}>
                  <TextField
                    id="filled-basic"
                    variant="standard"
                    size="large"
                    placeholder="Enter you'r Email here"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    size="large"
                    variant="contained"
                  >Get Started</Button>
                </Stack>

                <Stack direction="row" spacing={1}>
                  <Box display='flex' alignItems='center'>
                    <CheckIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                    <Typography variant='caption'> Free 30-Day Trial </Typography>
                    <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                    
                  </Box>

                  <Box display='flex' alignItems='center'>
                    <CheckIcon sx={{ fontSize: 18, marginRight: 0.5 }} color="primary" />
                    <Typography variant='caption'> Money Back Guarantee </Typography>
                    <IconButton sx={{ border: 1, marginRight: 1 }} color="primary" aria-label="upload picture" component="span">
                                    <CheckIcon />
                                </IconButton>
                  </Box>
                </Stack>

              </Stack>

            </Grid>


            <Grid item xs={5}>
              <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/ui-design.png" alt="gambar-home" style={{ height: 400 }} />
            </Grid>

          </Grid>

        </Container>
      </Box>

      <Box sx={{ padding: 10 }}>
        <Container fullWidth maxWidth="md">
          <Stack spacing={4} justifyContent="center" alignItems="center">
            <Stack direction="row" spacing={5}>
              {[1, 2, 3, 4, 5, 6].map(item => (
                <Paper key={item} sx={{ padding: 3 }}>
                  <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/ui-design.png" alt="gambar-home" style={{ height: 100, maxWidth: 100 }} />
                </Paper>
              ))}
            </Stack>
            <Stack direction="row" spacing={5}>
              {[1, 2, 3, 4, 5].map(item => (
                <Paper key={item} sx={{ padding: 3 }}>
                  <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/ui-design.png" alt="gambar-home" style={{ height: 100, maxWidth: 100 }} />
                </Paper>
              ))}
            </Stack>
          </Stack>
        </Container>

      </Box>
    </>
  );
}
