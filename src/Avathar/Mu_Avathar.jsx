import { Avatar,AvatarGroup,Stack } from "@mui/material";
import { green, orange } from "@mui/material/colors";
import React from "react";

export default function ImageAvathar(){
    return(
        <>
        
        <Stack direction="row" spacing={2} >
      <AvatarGroup  max={3}>
      <Avatar alt ='Ramyshap' variant="square"   sx={{ bgcolor: orange[500] }} > S </Avatar>
        <Avatar alt="Travis Howard" variant="rounded"  sx={{ bgcolor: green[500] }} >A</Avatar>
        <Avatar alt="Travis Howard" >T</Avatar>
        <Avatar alt="Travis Howard" >Y</Avatar>
        <Avatar alt="Travis Howard" >A</Avatar>

      </AvatarGroup>
        </Stack>
        
        </>
    )
}