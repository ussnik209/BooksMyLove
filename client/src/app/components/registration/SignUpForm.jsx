import React from 'react'

import { 
  Box,
  Stack,
  FormControlLabel,
  Checkbox,
  CircularProgress,
  Fade
 } from '@mui/material'

import Subtitle from '../common/Subtitle.jsx'
import UserInput from '../common/UserInput.jsx'
import SubmitButton from '../common/SubmitButton.jsx'
import Notification from '../common/Notification.jsx'

const SignUpForm = ({
  changeHandler,
  registerHandler,
  loading,
  form,
  error
}) => {
  const [open, setOpen] = React.useState(false)

  const handleOpenNotification = () => {
    setOpen(true)
  }

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    
    setOpen(false)
  }

  return (
    <Box component='form'>
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Subtitle>Sign up your account</Subtitle>
          <UserInput label='Name' name='name' onChange={changeHandler}/>
          <UserInput label='Surname' name='surname' onChange={changeHandler}/>
          <UserInput label='Email' name='mail' onChange={changeHandler}/>
          <UserInput label='Password' name='password' onChange={changeHandler}/>
          <UserInput label='Confirm password' onChange={changeHandler}/>
        </Stack>
        <Stack spacing={2}>
          <FormControlLabel control={<Checkbox />} label='Remember me'/>
          <Stack direction='row' spacing={2}>
            <SubmitButton onClick={async () => { 
              await registerHandler(form)
              handleOpenNotification()
            }}>
              Sign up
            </SubmitButton>
            <Fade in={loading}>
              <CircularProgress size='2rem'/>
            </Fade>
          </Stack>
        </Stack>
      </Stack>
      <Notification 
        open={open} 
        handleClose={handleCloseNotification} 
        type={error ? 'error' : 'success'}
      >
        {error ? error.message : 'You registered successful!'}
      </Notification>
    </Box>
  )
}

export default SignUpForm