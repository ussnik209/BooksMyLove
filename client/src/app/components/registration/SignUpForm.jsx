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
  loading
}) => (
  <Box component='form'>
    {console.log(loading)}
    <Stack spacing={6}>
      <Stack spacing={2}>
        <Subtitle>Sign up your account</Subtitle>
        <UserInput label='Name' onCHange={changeHandler}/>
        <UserInput label='Surname' onCHange={changeHandler}/>
        <UserInput label='Email Address' onCHange={changeHandler}/>
        <UserInput label='Password' onCHange={changeHandler}/>
        <UserInput label='Confirm password' onCHange={changeHandler}/>
      </Stack>
      <Stack spacing={2}>
        <FormControlLabel control={<Checkbox />} label='Remember me'/>
        <Stack direction='row' spacing={2}>
          <SubmitButton onClick={registerHandler}>
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