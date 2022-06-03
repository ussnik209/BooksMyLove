import React from 'react'

import { Typography, Stack } from '@mui/material'

const starPath = '../../../assets/svg/RatingStar.svg'

const Rating = ({children}) => (
  <Stack direction="row" spacing={2}>
    <img src={starPath} alt="star" />
    <Typography variant="body1" sx={{
      display: "flex",
      alignItems: 'center'
    }}>
      {children}
    </Typography>
  </Stack>
)

export default Rating