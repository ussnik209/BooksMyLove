import React from 'react'
import { NavLink } from 'react-router-dom'

import { AppBar, Toolbar, Box } from '@mui/material'

import Logo from './Logo.jsx'
import SearchBar from './SearchBar.jsx'
import ActiveUserMenu from '../../containers/UserMenu.js'
import AuthorizationLinks from './AuthorizationLinks.jsx'

const Header = ({isAuthorized}) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position='sticky'>
      <Toolbar sx={{ 
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <NavLink to='/'>
          <Logo content='BooksMyLove' />
        </NavLink>
        <SearchBar />
        {isAuthorized ? <ActiveUserMenu /> : <AuthorizationLinks />}
      </Toolbar>
    </AppBar>
  </Box>
)

export default Header