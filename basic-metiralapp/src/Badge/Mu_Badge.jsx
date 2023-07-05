

import { Badge, Typography,  } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';

export default function BadgeMu(){

   <>
   
   <Typography>Badge generates a small badge to the top-right of its child(ren).</Typography>

    <Badge badgeContent={4} color='primary'>
       <MailIcon color='action' />
        </Badge>   
   </>



}