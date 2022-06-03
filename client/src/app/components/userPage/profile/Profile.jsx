import React from 'react'

import { Grid } from '@mui/material'

import SectionHeader from '../../common/SectionHeader.jsx'
import UserNameCard from './UserNameCard.jsx'
import UserImageCard from './UserImageCard.jsx'
import MailCard from './MailCard.jsx'
const Profile = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <SectionHeader>My profile</SectionHeader>
    </Grid>
    <Grid item xs={6}>
      <UserNameCard></UserNameCard>
    </Grid>
    <Grid item xs={6}>
      <MailCard />
    </Grid>
    <Grid item xs={6}>
      <UserImageCard />
    </Grid>
  </Grid>
)

export default Profile