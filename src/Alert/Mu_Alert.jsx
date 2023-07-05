
import { Alert,AlertTitle,Box } from '@mui/material';
import React from 'react';

export default function BasicAlert(){
    return(
        <>
        <Box sx={{m : 4}}>
        <Alert severity='error'>
            <AlertTitle >Alert Error</AlertTitle>
            This an error alert -check it out
        </Alert>
        <Alert severity='warning'>
            <AlertTitle >Alert Warring</AlertTitle>
            This an warning alert - check it out
        </Alert>
        <Alert severity='success' variant='filled'> This an success alert-check it out </Alert>
        <Alert severity='info' variant='outlined' > This an Info alert - check it out</Alert>

        </Box>
        </>
    )
}