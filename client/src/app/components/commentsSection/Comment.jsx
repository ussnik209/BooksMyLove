import React from 'react'

import { Grid, Avatar } from '@mui/material'

import CommentInformation from './CommentInformation.jsx'

const Comment = ({src}) => (
  <Grid container spacing={2}>
    <Grid item xs="auto">
      <Avatar 
        alt="avatar" 
        src={src}
        sx={{
          height: 80, 
          width: 80
        }} 
      />
    </Grid>
    <Grid item xs={10}>
      <CommentInformation author="Author name" publishingTime="8 hours ago" />
    </Grid>
    
  </Grid>
) 

export default Comment