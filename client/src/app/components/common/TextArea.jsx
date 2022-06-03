import React from 'react'

import { TextField } from '@mui/material'

const TextArea = ({label}) => (
  <TextField multiline rows={4} label={label}/>
)

export default TextArea