import { AppBar, IconButton, Toolbar, Typography,Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';


export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{flexGrow : 1}}>
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge ='start' color='inherit' aria-label='menu' sx={{mr:3}}>
                    <MenuIcon />
                </IconButton>
                <Typography variant='h6' color='inherit' component='div' sx={{flexGrow :1 }}>News</Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>

    </Box>
    </>
  );
}