
import { AppBar, IconButton, Toolbar,Box, Typography, Button, FormGroup, FormControl, FormControlLabel, Switch, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import React from "react";

export default function AppBarWithMenu(){

    const [auth , setAuth] = React.useState(true)
    const [anchorEl , setAnchorEl] = React.useState(null)

    const handlechange = (event)=>{
        setAuth(event.target.checked)
    }
    const handleMenu = (event ) =>{
        setAnchorEl(event.CurrentTarget)
    }

    const handleClose = () =>{
        setAnchorEl(null)
    }

    return(
        <>
        <Box sx={{flexGrow : 3}}>
            <FormGroup>
                <FormControlLabel control={<Switch />} onClick={handlechange} checked={auth} aria-label="login swaitch"  label ={auth ? 'Login' : 'Logout'}>
                
                </FormControlLabel>
            </FormGroup>
            <AppBar position="static">
                <Toolbar >
                <IconButton size="large" color="inherit" edge='state' aria-aria-label="menu">
                <MenuIcon />
                </IconButton>
                <Typography color='inherit' component='div' variant="h6" sx={{flexGrow:1}}>Photos</Typography>
                {
                    auth && (
                        <div>
                            <IconButton 
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup='true'
                            color="inherit"
                            onClick={handleMenu}

                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical : 'top',
                                horizontal : 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical : 'top',
                                horizontal : 'right'
                            }}
                            open = {Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} >Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                        </div>
                    )
                }
               

                </Toolbar>
               
            </AppBar>

        </Box>
        </>
    )
}