import React from 'react'

import { Box } from '@mui/material'

const path = '../../../assets/img/backgrounds/Books.bmp'

const Background = () => (
  <Box sx={{
    width: '100%',
    height: '100%',
    backgroundImage: 'url(' + path + ')',
  }}/>
)

export default Background