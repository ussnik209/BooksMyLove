import React from 'react'

import { TextField } from '@mui/material'

const UserInput = ({label, defaultValue='', onChange}) => (
  <TextField
    id='outlined-helperText'
    label={label}
    defaultValue={defaultValue}
    onChange={onChange}
    fullWidth
  />
)

export default UserInput