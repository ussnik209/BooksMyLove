import React from 'react'

import { TextField } from '@mui/material'

const UserInput = (props) => (
  <TextField
    {...props}
    id='outlined-helperText'
    fullWidth
  />
)

export default UserInput