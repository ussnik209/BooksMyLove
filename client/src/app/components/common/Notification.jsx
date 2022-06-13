import React from 'react'

import { Snackbar, Alert } from '@mui/material'

const Notification = ({children, open, handleClose, type}) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={type} sx={{ width: '100%'}}>
        {children}
      </Alert>
    </Snackbar>
  )
}

export default Notification