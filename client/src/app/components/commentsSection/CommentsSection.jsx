import React from 'react'

import { Grid } from '@mui/material'

import CommentsInput from './CommentInput.jsx'
import CommentsList from './CommentsList.jsx'

const CommentsSection = () => (
  <Grid container direction="column" spacing={2}>
    <Grid item>
      <CommentsInput />
    </Grid>
    <Grid item>
      <CommentsList />
    </Grid>
  </Grid>
)

export default CommentsSection