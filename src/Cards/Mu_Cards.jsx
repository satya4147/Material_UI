
import { Button, Card, CardActions, CardContent, Typography,Box } from "@mui/material";
import React from "react";

export default function BasicCards(){

      const bull = (
        <Box 
        component = 'span'
        sx={{display : 'inline-block', mx : '2px', transform : 'scale(0.1)'}}
        
        >
            .
        </Box>
      )

     
    return(
        <>
        <Typography>Cards</Typography>

        <Card sx={{minWidth: 275}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>word of the day</Typography>
                <Typography component='div' variant="h5">be{bull}nev{bull}o{bull}lent </Typography>
                <Typography sx={{mb : 1.5} } color='text.secondary'>adjective</Typography>
                <Typography variant="body2">Will meaning in kindly</Typography>

            </CardContent>
            <CardActions>
                <Button size="small" variant="outlined">Learn More</Button>
            </CardActions>
        </Card>

        </>
    )
}


