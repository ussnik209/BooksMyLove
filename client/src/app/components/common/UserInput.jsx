import React from 'react'

import { TextField } from '@mui/material'

const UserInput = ({label, defaultValue=''}) => (
  <TextField
    id='outlined-helperText'
    label={label}
    defaultValue={defaultValue}
    fullWidth
  />
)

export default UserInput