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
  validateForm,
  loading,
  form,
  serverError,
  validationErrors
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

  const nameError = validationErrors.find(el => el.target === 'name')
  const surnameError = validationErrors.find(el => el.target === 'surname')
  const mailError = validationErrors.find(el => el.target === 'mail')
  const passwordError = validationErrors.find(el => el.target === 'password')
  const confirmPasswordError = validationErrors.find(el => el.target === 'confirmPassword')

  return (
    <Box component='form'>
      <Stack spacing={6}>
        <Stack spacing={2}>
          <Subtitle>Sign up your account</Subtitle>
          <UserInput label='Name' name='name' onChange={changeHandler} 
            required
            error={!!nameError}
            helperText={nameError?.message}
          />
          <UserInput label='Surname' name='surname' onChange={changeHandler} 
            required            
            error={!!surnameError}
            helperText={surnameError?.message}
          />
          <UserInput label='Email' name='mail' onChange={changeHandler} 
            required
            error={!!mailError}
            helperText={mailError?.message}
            />
          <UserInput label='Password' name='password' onChange={changeHandler}
            required
            error={!!passwordError}
            helperText={passwordError?.message}
            type='password'
          />
          <UserInput label='Confirm password' name='confirmPassword' onChange={changeHandler} 
            required
            error={!!confirmPasswordError}
            helperText={confirmPasswordError?.message}
            type='password'
          />
        </Stack>
        <Stack spacing={2}>
          <FormControlLabel control={<Checkbox />} label='Remember me'/>
          <Stack direction='row' spacing={2}>
            <SubmitButton onClick={async () => { 
              if (validateForm(form)) {
                await registerHandler(form)
                handleOpenNotification()
              }
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
        type={serverError ? 'error' : 'success'}
      >
        {serverError ? serverError.message : 'You registered successful!'}
      </Notification>
    </Box>
  )
}

export default SignUpForm