import React from 'react'

import { CircularProgress, Grid, Box } from '@mui/material'

import Favorite from './favorite/Favorite.jsx'
import PersonalizedProfile from '../../containers/PersonalizedProfile.js'
import LoadingCircle from '../common/LoadingCircle.jsx'

const UserPage = ({isLoading, isAuth, fetchUserData, userId}) => {
  if (isAuth) fetchUserData(userId) 

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        {
          isLoading ? <LoadingCircle size='10rem' />
          : <PersonalizedProfile />
        }
      </Grid>
      <Grid item xs={12}>
      {
          isLoading ? <LoadingCircle size='10rem'/>
          : <Favorite />
        }
      </Grid>
    </Grid>
  )
}

export default UserPage