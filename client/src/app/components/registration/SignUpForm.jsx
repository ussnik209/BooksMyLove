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

const SignUpForm = ({
  changeHandler,
  registerHandler,
  loading,
  form
}) => (
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
          <SubmitButton onClick={() => { 
            registerHandler(form)}}>
            Sign up
          </SubmitButton>
          <Fade in={loading}>
            <CircularProgress size='2rem'/>
          </Fade>
        </Stack>
      </Stack>
    </Stack>
  </Box>
)

export default SignUpForm