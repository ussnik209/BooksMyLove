import React from 'react'
import { NavLink } from 'react-router-dom'

import { Typography, Divider, Box } from '@mui/material'

const AuthorizationFooter = ({children, linkContent, linkTo}) => (
  <Box>
    <Divider />
    <Typography variant='body2' gutterBottom>
      {children}
      <NavLink to={linkTo}>{linkContent}</NavLink>
    </Typography>
  </Box>
)

export default AuthorizationFooter