
import { Box, TextField, Typography  } from "@mui/material";
import React from "react";

export default function TextFilied(){
    return(
        <>

<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

        <Typography component='h2'>Text Filled</Typography>

        <TextField id="filled-basic" variant="filled"  label='hello world' />
        <TextField  id ='outlined-basic' variant="outlined" color="error" size="small" label = 'Outlined' />
        <TextField id='standard-basic' variant="standard" label ='Standard'></TextField>

        </Box>
        </>
        
    )
}