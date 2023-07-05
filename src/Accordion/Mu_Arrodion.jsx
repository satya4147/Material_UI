
    import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
   // import ExpandMoreIcon from '@mui/icons-material/ExpandMoreIcon';
import React from "react";

    export default function BasicAccordion(){
        return(
            <>
            <Typography>Basic Accordions</Typography>
            <div>
                <Accordion>
                    <AccordionSummary aria-controls="panale-content"   
                   // expandIcon ={<ExpandMoreIcon />}       
                    id='panale-header'>
                    </AccordionSummary>
                    <Typography>Accordion 1</Typography>
                    <AccordionDetails>
                        <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            
            </>
        )
    }