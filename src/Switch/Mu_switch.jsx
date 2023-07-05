
import { FormControl, FormControlLabel,Switch,Typography } from "@mui/material";
import React from "react";

export default function BasicLabelSwitch(){
    const [checked , setChecked] = React.useState(true)

    const handleChange = (event) =>{
        setChecked(event.target.checked);
    }

    return(
        <>
        <Typography>Switch Options</Typography>
        <FormControl >
            <FormControlLabel control={<Switch /> } label='Lables' size ='small' color="success" ></FormControlLabel>
            <FormControlLabel required control={<Switch />} label='Requits' checked={checked} onChange={handleChange} color="primary" ></FormControlLabel>
            <FormControlLabel control={<Switch /> } disabled label='disabled' />
        </FormControl>
        
        </>
    )
}