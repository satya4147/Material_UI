
import { CircularProgress, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";

export default function BasicProgress(){

        const [progress , setProgress] = React.useState(0)

       React.useEffect(()=>{
        const timer = setInterval(()=>{
            setProgress((oldprogress)=>{
                if(oldprogress === 100){
                    return 0;
                }
                const diff = Math.round() *10;
                return Math.min(oldprogress + diff ,100)
            })
        },500)
        return () =>{
            clearInterval(timer)
        }
       },[])

    return(
        <>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
            <CircularProgress color="info"  size='small'></CircularProgress>
            <CircularProgress color="success"></CircularProgress>
            <CircularProgress color="secondary"></CircularProgress>
            <CircularProgress color="inherit"></CircularProgress>

           

        </Stack>
        <Typography>Circular determinate</Typography>

        <CircularProgress variant="determinate" value={100}></CircularProgress>
        <CircularProgress variant="determinate" value={50}></CircularProgress>

        <Typography>Linear color</Typography>
        <LinearProgress color="secondary"></LinearProgress>
        <Typography>Linear determinate</Typography>
        <LinearProgress color="success" variant="deteminate" value={progress}></LinearProgress>
            
        </>
    )
}