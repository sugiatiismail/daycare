import React from "react";
import { Grid, Typography } from "@mui/material"
import { Container } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';


export default function MeetOurTeam() {

    // String
    var str = "Meet Our Team Baru";

    // Number
    var age = 20;

    // Objek
    var user = {
        nama: "budi",
        age: 20
    }

    // Array
    var users = [
        {
            nama: "Ismail",
            age: 20,
            photo:""
        },
        {
            nama: "Rahmat",
            age: 20,
            photo:""
        },
        {
            nama: "Wahyuni",
            age: 20,
            photo:""
        }
    ]

    return (
        <div style={{ backgroundColor: '#ffffff', padding: 20 }}>

            <Container sx={{ height: '100vh' }}>

                <Typography align="center" variant="h6"> String : {str} </Typography>
                <Typography align="center" variant="h6"> Number {age}</Typography>

                <Typography align="center" variant="h6"> Objek  : {user.nama}  </Typography>
                <Typography align="center" variant="h6"> Objek  : {user.age}  </Typography>
                <Typography align="center" variant="h6"> Objek  : {JSON.stringify(user)}  </Typography>

                <Typography align="center" variant="h6"> Array  : {JSON.stringify(users)}  </Typography>
                {users.map(obj => (
                    <Typography key={obj.nama} align="center" variant="h6"> Array  : {obj.nama} {obj.age}  </Typography>
                ))}

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={3}
                >
                    {users.map(obj => (
                        <Grid item key={obj.nama} xs={4}>
                            <Stack justifyContent="center" alignItems="center" spacing={2} >

                                <img src="https://demo.epic-webdesign.com/tf-smart/v1/images/team001.jpg" alt="gambar-home" style={{ height: 350, borderRadius: 10 }} />

                                <div>
                                    <Typography align="center" variant="h6"> {obj.nama} </Typography>
                                    <Typography gutterBottom align="center" variant="body1">Head of SEO - {obj.age}</Typography>
                                </div>


                                <Typography align="center" variant="body1">Johnathan is our co-founder and has developed search strategies for a variety of clients for over 5 years.</Typography>
                                <Stack direction="row">
                                    <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                    <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                    <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                    <FavoriteIcon color="warning" sx={{ fontSize: 45 }} />
                                </Stack>

                            </Stack>
                        </Grid>
                    ))}

                </Grid>


            </Container>

        </div>
    )
}