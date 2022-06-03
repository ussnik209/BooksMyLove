import React from 'react'

import { IconButton } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'

const LockButton = ({locked=false}) => (
  <IconButton>
    {locked ? <LockIcon /> : <LockOpenIcon />}
  </IconButton>
)

export default LockButton