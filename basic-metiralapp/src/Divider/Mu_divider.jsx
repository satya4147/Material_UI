import React from "react";

import {Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography} from '@mui/material'


export default function BasicDivider(){

    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };

    return(
        <>
        <Typography>Basic Divider</Typography>
        <Typography component='h4'> List divider</Typography>
        <Typography paragraph>The divider renders as an hr tag by default. You can save rendering this DOM element by using the divider prop on the ListItem component.</Typography>


            <List sx={ style} component='nav' aria-label="mailbox folder">
                <ListItem button>
                    <ListItemText primary='input' secondary ='02-06-2023' ></ListItemText>
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <ListItemText primary = 'Drafts'></ListItemText>
                </ListItem>
                <ListItem >
                    <ListItemText primary='Trash'></ListItemText>
                </ListItem>
                <Divider light />
              <ListItem>
              <ListItemAvatar>
                    <Avatar>S</Avatar>
                    </ListItemAvatar>
                        <ListItemText primary ='Avatar'></ListItemText>
                    

             
              </ListItem>
            </List>

        </>
    )
}