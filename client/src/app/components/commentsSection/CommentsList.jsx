import React from 'react'

import { Grid } from '@mui/material'

import Comment from './Comment.jsx'

const CommentsList = () => (
  <Grid container direction="column" spacing={4}>
    <Grid item>
      <Comment />
    </Grid>
    <Grid item>
      <Comment />
    </Grid>
    <Grid item>
      <Comment />
    </Grid>
  </Grid>
)

export default CommentsList