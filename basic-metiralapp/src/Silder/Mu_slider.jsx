
import { Stack,Box, Slide, Slider, VolumeDown , VolumeUp } from "@mui/material";
import React from "react";


export default function Slidercomponent(){

    const [value , setValue] = React.useState(30)

        const handleChange = (event , newEvent) =>{
            setValue(newEvent)
        }

    return(
        <>
       <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
        </>
    )
}