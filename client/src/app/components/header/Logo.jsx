import React from 'react'

import { Typography } from '@mui/material'

const Logo = ({content}) => (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      {content}
    </Typography>
)

export default Logo