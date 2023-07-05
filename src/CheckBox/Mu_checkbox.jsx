
import { Checkbox, FormControlLabel, FormGroup, Stack, Typography ,Box} from '@mui/material'
import React from 'react'

function Mu_checkbox() {
    
    const [checked , setChecked] = React.useState(true,false)

        const handleChange1 =(event)=>{
            setChecked(event.target.checked , event.target.checked)
        }

    const handleChange2 =(event)=>{
        setChecked([event.target.checked , checked[0]])
    }
    const handleChange3 = (event)=>{
        setChecked(event.target.checked , checked[1])
    }


    const child = (
        <Box>
            <FormControlLabel control={< Checkbox checked={checked[0]}/>} onChange={handleChange2} label='child 1'></FormControlLabel>
            <FormControlLabel control={< Checkbox checked ={checked[1]}/>} onChange={handleChange3} label='chiled 2'></FormControlLabel>
        </Box>
    )
  return (
    <div>
        <Typography variant='h5'>Basic Check Box</Typography>

        <Checkbox defaultChecked ></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox disabled></Checkbox>

        <Typography>Label</Typography>
        <Typography pargraph>You can provide a label to the Checkbox thanks to the FormControlLabel component.</Typography>
        <FormGroup >
       
            <FormControlLabel control={< Checkbox defaultChecked />} label='Label' ></FormControlLabel>
            <FormControlLabel control={<Checkbox />} required label='Required'></FormControlLabel>
            <FormControlLabel control={<Checkbox />} disabled label='disabled'></FormControlLabel>
        </FormGroup>
       
        <Typography>Indeterminate</Typography>

            <FormControlLabel control={<Checkbox checked={ checked[0] && checked[1]} indeterminate ={checked[0] !== checked[1] } onChange = {handleChange1}
                    
            />} onChange={handleChange1} label='parent'></FormControlLabel>

        {child}

    </div>
  )
}

export default Mu_checkbox