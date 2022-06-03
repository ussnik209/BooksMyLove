import React from 'react'

import { Grid } from '@mui/material'

import Profile from './profile/Profile.jsx'
import Favorite from './favorite/Favorite.jsx'

const UserPage = () => (
  <Grid container spacing={10}>
    <Grid item xs={12}>
      <Profile />
    </Grid>
    <Grid item xs={12}>
      <Favorite />
    </Grid>
  </Grid>
)

export default UserPage