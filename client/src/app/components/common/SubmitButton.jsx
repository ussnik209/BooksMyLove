import React from 'react'

import { Button } from '@mui/material'

const SubmitButton = (props) => (
  <Button {...props}
    variant="contained"
    sx={{
      width: "200px",
    }}  
  >{props.children}</Button>
)

export default SubmitButton