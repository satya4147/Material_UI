
    import { Rating, Typography,Box } from "@mui/material";
import React from "react";

    function RatingButtons(){

        const [values , setValues] = React.useState(2);

        const handleRating = (event)=>{
            setValues(event.target.value)
        }

        return(
            <div>
                <Box>
                <Typography component='legend'>Controlled</Typography>
                <Rating 
                name="simple-controlled"
                value={values}
                onChange={handleRating}
                >
                    
                </Rating>
                <Typography component='legend' >Read Only</Typography>
                <Rating 
                name="read-only"
                value={values}
                onChange={handleRating}
                >

                </Rating>
                <Typography component='legend'>Disabled</Typography>
                <Rating name="disabled" value={values} disabled ></Rating>
                <Typography component='legend'>half Rating</Typography>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5}></Rating>
                </Box>
            </div>
        )
    }

    export default RatingButtons;