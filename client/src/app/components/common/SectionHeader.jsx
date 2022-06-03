import React from 'react'

import { Typography } from '@mui/material'

const SectionHeader = ({children}) => (
  <Typography variant='h3' gutterBottom>
    {children}
  </Typography>
)

export default SectionHeader