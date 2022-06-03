import React from 'react'

import { Grid, Typography } from '@mui/material'

import CommentText from './CommentText.jsx'

const CommentInformation = ({author, publishingTime}) => (
  <Grid container direction="column" spacing={2}>
    <Grid item container spacing={2}>
      <Grid item>
        <Typography variant="body2">{author}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{publishingTime}</Typography>
      </Grid>
    </Grid>
    <Grid item>
      <CommentText></CommentText>
    </Grid>
  </Grid>
)

export default CommentInformation