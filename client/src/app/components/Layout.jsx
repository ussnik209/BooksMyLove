import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from '@mui/material'

import Header from '../containers/HeaderContainer'

const Layout = () => (
  <>
  <Header />

  <Container maxWidth='md' className='content'>
    <Outlet />
  </Container>
  </>
)

export default Layout