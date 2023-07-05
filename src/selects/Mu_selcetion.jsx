import { FormControl, InputLabel, MenuItem, Select, Typography,Box } from "@mui/material";
import React from "react";

export default function SelectionButtons(){

        const [age , setAge] = React.useState('')

        const handleAge = (e) =>{
            setAge(e.target.value)
        }

    return(
        <>
        <Typography>Select</Typography>
        <Typography>Select components are used for collecting user provided information from a list of options.</Typography>

            <Box sx={{ minWidth: 120 }}>
        <FormControl size="small" sx={{ m: 1, minWidth: 120 }}  color="success" >
            <InputLabel id='select_id'></InputLabel>
            <Select labelId="select_id" value={age} onChange={handleAge} label='Age'>

                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>

                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                   
                    <InputLabel id='select_filled'>Age</InputLabel>
                    <Select label='Filled' id="select_filled" value={age} labelId="select_filled">
                            <MenuItem value={''}> <em>none</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thrity</MenuItem>

                    </Select>
                </FormControl>
            </Box>
        </>

     
    )
}