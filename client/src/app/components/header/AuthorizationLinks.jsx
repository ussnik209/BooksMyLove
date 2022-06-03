import React from 'react'
import { NavLink } from 'react-router-dom'

import { Stack, Typography } from '@mui/material'

const AuthorizationLinks = () => (
  <Stack direction='row' spacing={1}>
    <NavLink to='/sign-in'>Sign in</NavLink>
    <Typography>/</Typography>
    <NavLink to='/sign-up'>Sign up</NavLink>
  </Stack>
)

export default AuthorizationLinks