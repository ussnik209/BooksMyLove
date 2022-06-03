import React from 'react'

import { IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'

const FavoriteButton = ({sx}) => {
  const className = !sx ? "favorite-button" : ""
  return (
    <IconButton size="large" className={className} sx={sx}>
      <FavoriteIcon />
    </IconButton>
  )
}

export default FavoriteButton