import React from 'react'

import { Grid, Container, Stack } from '@mui/material'

import Background from '../common/Background.jsx'
import Header from '../header/Header.jsx'
import RequestingLoginForm from '../../containers/RequestingLoginForm.js'
import AuthorizationFooter from './AuthorizationFooter.jsx'

const Authorization = () => (
  <>
  <Header />
   <Grid container>
      <Grid item xs={3}>
        <Background></Background>
      </Grid>
      <Grid item xs={9}>
        <Container   className='sign-content'>
          <Stack maxWidth='sm' spacing={12}>
            <RequestingLoginForm />
            <AuthorizationFooter linkContent='sign up' linkTo='/sign-up'>Haven't an account yet?  </AuthorizationFooter>
          </Stack>
        </Container>
      </Grid>
    </Grid>
  </>
)
export default Authorization  