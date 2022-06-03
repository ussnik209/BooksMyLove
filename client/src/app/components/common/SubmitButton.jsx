import React from 'react'

import { Button } from '@mui/material'

const SubmitButton = ({children}) => (
  <Button 
    variant="contained"
    sx={{
      width: "200px",
    }}  
  >{children}</Button>
)

export default SubmitButton