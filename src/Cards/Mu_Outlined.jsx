
import { Card, CardContent, Typography ,Box, CardActions, Button} from "@mui/material";
import React from "react";

export default function OutlinedCards(){

    const bull = (
        <Box 
        sx={{display : 'inline-block', mx: '2px' , transform : 'scale(0.1)'}}
        >
            .
        </Box>
    )

    const cards = (
    <React.Fragment>

        <Card sx={{minWidth : 275}}>
            <CardContent>
                <Typography color='text.secondary' gurrerBottm>Words of the day</Typography>
                <Typography component='div' variant="h5">be{bull}nav{bull}O{bull}lent</Typography>
                <Typography color='text.secondary'>adjestment</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    </React.Fragment>
    )

    return(
        <>
       <Box sx={{minWidth : 275}} variant='filled'>
       <Card variant="outlined">{cards}</Card>
       </Box>
        </>
    )
}