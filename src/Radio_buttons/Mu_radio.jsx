
import React from 'react';
import { FormControl, Radio, Typography ,FormControlLabel, FormLabel, RadioGroup, FormHelperText, Button} from '@mui/material';


function Mu_radio() {

        const [chnage, setChange] = React.useState('male') 
        const [values , setValues] = React.useState(' ')
        const [error , setError] = React.useState(false)
        const[help, setHelp] = React.useState('choose wisley')

        const handleRadio =(event)=>{
            setChange(event.target.value)
        }

            const handlechange = (event)=>{
                setValues(event.target.values)
                setError(false)
                setHelp('')
            }

            const handleSubmit = (event)=>{
                event.preventDefault()

                if(values === 'best'){
                    setHelp('you got it')
                    setError(false)
                }else if(values === 'worst'){
                    setHelp('Sorry, wrong answer!')
                    setError(true)
                }else{
                    setError('please choose one options')
                    setHelp(true)
                }
            }

  return (
    <div>
        
       <Typography>Radio Group</Typography>
       <FormControl >
        
        <FormLabel id='gender_demo' >Gender</FormLabel>
        <RadioGroup row
         aria-labelledby='gender_demo' 
        // defaultValue='female' 
         name='radio-buttons-group'
         value={chnage}
         onChange={handleRadio}  >
            
       
        <FormControlLabel control={<Radio />} label='Female' value='female'></FormControlLabel>
        <FormControlLabel control={<Radio />} label ='Male' value='male'></FormControlLabel>
        <FormControlLabel control={<Radio />} label = 'Other' value='other'></FormControlLabel>

        </RadioGroup>
       
       </FormControl>


        <Typography sx={{mt:2}}>Show error</Typography>

        <form onSubmit={handleSubmit}>
            <FormControl sx={{ m: 3 }} error={error } variant="standard">

                <FormLabel id='showError'>Pop quiz: MUI is...</FormLabel>

                <RadioGroup
                
              //  row
                aria-labelledby='showError'
                name='quiz'
                onChange={handlechange}
                value={values}
                
                >
                    <FormControlLabel control={<Radio />} value='best'  label='best'></FormControlLabel>
                    <FormControlLabel control={<Radio />} value='worst' label='worst'></FormControlLabel>


                </RadioGroup>
                <FormHelperText>{help}</FormHelperText>
                <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>

            </FormControl>
        </form>
       
    </div>
  )
}

export default Mu_radio