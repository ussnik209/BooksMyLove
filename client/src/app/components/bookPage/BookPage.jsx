import React from 'react'

import { Paper, Stack, Grid } from '@mui/material'

import BookPresentation from './BookPresentation.jsx'
import CommentsSection from '../commentsSection/CommentsSection.jsx'

const BookPage = () => (
  <Paper sx={{
    borderRadius: "30px",
    padding: "15px"
  }}>
    <Grid  container direction="column" spacing={10}>
      <Grid item>
        <BookPresentation />
      </Grid>
      <Grid item>
        <CommentsSection />
      </Grid>
    </Grid>
    
  </Paper>
)

export default BookPage