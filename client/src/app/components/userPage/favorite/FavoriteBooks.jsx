import React from 'react'

import { Grid } from '@mui/material'

import BooksItemShort from './BooksItemShort.jsx'

const FavoriteBooks = () => (
  <Grid container spacing={2}>
    <Grid item xs={4}>
      <BooksItemShort />
    </Grid>
    <Grid item xs={4}>
      <BooksItemShort />
    </Grid>
    <Grid item xs={4}>
      <BooksItemShort />
    </Grid>
    <Grid item xs={4}>
      <BooksItemShort />
    </Grid>
    <Grid item xs={4}>
      <BooksItemShort />
    </Grid>
  </Grid>
)

export default FavoriteBooks