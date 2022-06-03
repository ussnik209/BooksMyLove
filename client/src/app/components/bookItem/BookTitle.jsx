import React from 'react'

import { Typography } from '@mui/material'

const BookTitle = ({children}) => (
  <Typography variant='h4'>
    {children}
  </Typography>
)

export default BookTitle