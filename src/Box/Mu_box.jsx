import { Box, Button, Container } from '@mui/material'
import React from 'react'

function Mu_box() {
  return (
    <div>
      <Container  maxWidth="sm">
      <Box component='span' sx={{  p: 4, border: '1px dashed grey' }}>
            <Button>Save</Button>
            
        </Box>
      </Container>
    </div>
  )
}

export default Mu_box