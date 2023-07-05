import React from "react";
import { FormControl, FormControlLabel, TextField, Typography,Box } from "@mui/material";

export default function FormProps(){

    return(
    <>
    
    <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <Typography langed ='FormProps'>FormProps</Typography>

        <FormControl >

         <TextField required label='Required' defaultValue={'helloWorld'} sx={{mb : 2}} error helperText ='incorrtent entry' ></TextField>
         <TextField disabled label ='disabled' defaultValue={'HelloWorld'} />
         <TextField variant="outlined" defaultValue={'disabled'} label='outlined' />

        </FormControl>

        </div>

        </Box>
    </>
    )
}