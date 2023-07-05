
import React from 'react'

import {Avatar, Chip, Typography} from '@mui/material';



export default function BaiscChip(){

    const [value, setValue] = React.useState('')

    const handleClick = (e)=>{
       //setValue(e.target.value)
       setValue( console.info('You clicked the Chip.'))
      
    }

    const handleDelete = () =>{
        console.info('Delete your labele')
    }

 return(
    <>
    <Typography sx={{m : 2}}>Chips are compact elements that represent an input, attribute, or action.</Typography>
    <Chip avatar={<Avatar>S</Avatar>} label ='Chip Label'  size='small'>  </Chip>
    <Chip  label='Chip Label' variant='outlined' color='success' onDelete={handleDelete} ></Chip>
    <Chip label='Chip label ' variant='text' onClick={handleClick} ></Chip>
   </>

 )

}