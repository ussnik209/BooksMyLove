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

const LoginForm = () => (
  <Box component='form'>
    <Stack spacing={6}>
      <Stack spacing={2}>
        <Subtitle>Sign in your account</Subtitle>
        <UserInput label='Email Address'/>
        <UserInput label='Password'/>
      </Stack>
      <Stack spacing={2}>
        <FormControlLabel control={<Checkbox />} label='Remember me'/>
        <SubmitButton>Sign in</SubmitButton>
      </Stack>
    </Stack>
  </Box>
)

export default LoginForm