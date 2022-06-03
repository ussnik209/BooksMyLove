import React from 'react'

import { Stack } from '@mui/material'

import FavoriteBooks from './FavoriteBooks.jsx'
import SectionHeader from '../../common/SectionHeader.jsx'

const Favorite = () => (
  <Stack direction="column" spacing={2}>
    <SectionHeader>My favorite</SectionHeader>
    <FavoriteBooks />
  </Stack>
)

export default Favorite