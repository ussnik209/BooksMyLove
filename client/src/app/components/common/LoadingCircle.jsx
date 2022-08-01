import React from 'react'

import { Box, CircularProgress } from '@mui/material'

const LoadingCircle = ({size}) => (
  <Box sx={{
    display: 'flex',
    justifyContent: 'center',
  }}>
    <CircularProgress size={size}/> 
  </Box>
)

export default LoadingCircle