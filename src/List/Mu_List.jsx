

    import { Collapse, List, ListItem, ListItemButton,  ListItemText, Typography } from "@mui/material";
import React from "react";

    export default function ListBaisc(){

        const [open , setOpen] = React.useState(true)

        const handleclick = () =>{
            setOpen(!open)
        }
         return(
            <>
            <Typography>Basic List</Typography>

            <List component='nav' sx={{maxWidth : 360 , width :'200px' , color : 'red'}}>
                <ListItem>
                    <ListItemButton>
                     
                        <ListItemText primary ='InputBox'></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton>
                        <ListItemText primary='Outbox'></ListItemText>
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={handleclick}>
                       <ListItemText primary ='inbox'></ListItemText>
                       { open ? 'hello' : 'come' }
                    </ListItemButton>
                    <Collapse in={open}  unmountOnExit>
                    <List>
                        <ListItemButton component='div'>
                            <ListItemText primary='standard'></ListItemText>
                        </ListItemButton>
                    </List>
                    </Collapse>
                </ListItem>
            </List>
            
            </>
        )
    }