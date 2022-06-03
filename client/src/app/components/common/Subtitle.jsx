import React from 'react'

import { Typography } from '@mui/material'

const Subtitle = ({children}) => (
  <Typography variant='h5' gutterBottom>
    {children}
  </Typography> 
)

export default Subtitle