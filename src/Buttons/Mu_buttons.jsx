import React from 'react';
import Button from '@mui/material/Button';
import { ButtonGroup, Stack, Typography  } from '@mui/material';



function Mu_buttons() {
  return (
   
    <div >
        <Typography sx={{mr:4 , mt:2 , ms:2}}>Basic Buttons</Typography>
        <Button variant='text' sx={{mr:4 , mt:2 , ms:2}}> Text</Button>
        <Button variant='contained' color='primary' sx={{mr:4 , mt:2 , ms:2}} >contained</Button>
        <Button variant='outlined' color='error' sx={{mr:4 , mt:2 , ms:2}} >Error</Button>
        <Button disabled variant='outlined' sx={{mr:4 , mt:2 , ms:2}}>Disabled</Button>
        <Button href='#text-buttons' sx={{mr:4 , mt:2 , ms:2}}>Link</Button>

            <Typography sx={{ mt:2}}>Color Buttons</Typography>
       

            <Button variant='outlined' color='primary'  sx={{mr:4 , mt:2 , ms:2}} >Primary</Button>
            <Button variant='contained' color='success'  sx={{mr:4 , mt:2 , ms:2}}>Success</Button>
            <Button variant='outlined' color='secondary'  sx={{mr:4 , mt:2 , ms:2}}>Secondry</Button>

            <Typography sx={{mt:2}}>Size props</Typography>

            <Button variant='contained' color='secondary' size='small' sx={{mr:4 , mt:2 , ms:2}}>Small</Button>
            <Button  variant='outlined' color='primary' size='large' sx={{mr:4 , mt:2 , ms:2}}>Large</Button>
            <Button variant='outlined' color='error' size='medim' sx={{mr:4 , mt:2 , ms:2}} >medim</Button>

            <Typography sx={{mt:2}} >Basic button group</Typography>
           <ButtonGroup variant='text' orientation='vertical'>
            <Button >contained</Button>
            <Button >Text</Button>
            <Button  >Outlined</Button>
           </ButtonGroup>
    </div>
  )
}

export default Mu_buttons;