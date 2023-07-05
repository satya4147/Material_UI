import React from 'react'
import {Button, Tooltip} from '@mui/material'
import { IconButton } from '@mui/material'

function Mu_tooltip() {
  return (
    <div>
        <Tooltip title='Add' arrow>
            <Button>ARROW</Button> 
         
        </Tooltip>
        <Tooltip title = 'delete the icon'>     
     <Button  color='error'>Delete</Button>
     </Tooltip>
    </div>
  )
}

export default Mu_tooltip