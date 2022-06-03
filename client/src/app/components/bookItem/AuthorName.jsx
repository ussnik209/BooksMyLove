import React from 'react'

import { Typography } from '@mui/material'

const AuthorName = ({children}) => (
  <Typography variant='subtitle2' gutterBottom>
    {children}
  </Typography>
)

export default AuthorName