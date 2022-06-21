import React from 'react'
import { useNavigate } from 'react-router-dom'

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

const SignInForm = ({
  changeHandler,
  loginHandler,
  rememberMeHandler,
  validateForm,
  loading,
  form,
  serverError,
  validationErrors
}) => {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()


  const handleOpenNotification = () => {
    setOpen(true)
  }

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    
    setOpen(false)
  }

  const mailError = validationErrors?.find(el => el.target === 'mail')
  const passwordError = validationErrors?.find(el => el.target === 'password')

  return (
    <Box component='form'>
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Subtitle>Sign in your account</Subtitle>
          <UserInput label='Email Address' name='mail' onChange={changeHandler} 
            type='email'
            required
            error={!!mailError}
            helperText={mailError?.message}
          />
          <UserInput label='Password' name='password' onChange={changeHandler} 
            type='password'
            required
            error={!!passwordError}
            helperText={passwordError?.message}
          />
        </Stack>
        <Stack spacing={2}>
          <FormControlLabel control={<Checkbox onChange={rememberMeHandler}/>} label='Remember me'/>
          <Stack direction='row' spacing={2}>
            <SubmitButton onClick={async () => { 
              if (validateForm(form)) {
                await loginHandler(form)
                handleOpenNotification()
                setTimeout(() => navigate('/'), 2500)
              }
            }}>
              Login
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
        type={serverError ? 'error' : 'success'}
      >
        {serverError ? serverError.message : 'You logged in successful and will navigate to homepage after a few seconds.'}
      </Notification>
    </Box>
  )
}

export default SignInForm