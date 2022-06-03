import React from 'react'

import { 
  Box,
  Stack,
  FormControlLabel,
  Checkbox
 } from '@mui/material'

import Subtitle from '../common/Subtitle.jsx'
import UserInput from '../common/UserInput.jsx'
import SubmitButton from '../common/SubmitButton.jsx'

const SignUpForm = () => (
  <Box component='form'>
    <Stack spacing={6}>
      <Stack spacing={2}>
        <Subtitle>Sign up your account</Subtitle>
        <UserInput label='Name'/>
        <UserInput label='Surname'/>
        <UserInput label='Email Address'/>
        <UserInput label='Password'/>
        <UserInput label='Confirm password'/>
      </Stack>
      <Stack spacing={2}>
        <FormControlLabel control={<Checkbox />} label='Remember me'/>
        <SubmitButton>Sign up</SubmitButton>
      </Stack>
    </Stack>
  </Box>
)

export default SignUpForm