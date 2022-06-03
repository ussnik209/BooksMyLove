import React from 'react'

import { IconButton, Menu, MenuItem, Divider } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Add book</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>Sign out</MenuItem>
    </Menu>
  )

  return (
    <>
    <IconButton size="large" color="inherit" onClick={handleProfileMenuOpen}>
      <AccountCircleIcon />
    </IconButton>
    {renderMenu}
    </>
  )
}

export default UserMenu