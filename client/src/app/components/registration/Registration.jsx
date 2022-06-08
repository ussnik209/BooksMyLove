import React from 'react'

import { Grid, Container, Stack } from '@mui/material'

import Background from '../common/Background.jsx'
import Header from '../header/Header.jsx'
import RequestingRegistrationForm from '../../containers/RequestingRegistrationForm.js'
import AuthorizationFooter from '../authorization/AuthorizationFooter.jsx'

const Registration = () => (
  <>
  <Header />
   <Grid container>
      <Grid item xs={3}>
        <Background></Background>
      </Grid>
      <Grid item xs={9}>
        <Container   className='sign-content'>
          <Stack maxWidth='sm' spacing={12}>
            <RequestingRegistrationForm />
            <AuthorizationFooter linkContent='sign in' linkTo='/sign-in'>Lorem ipsum, dolor sit amet consectetur adipisicing </AuthorizationFooter>
          </Stack>
        </Container>
      </Grid>
    </Grid>
  </>
)
export default Registration