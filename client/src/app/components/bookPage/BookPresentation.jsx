import React from 'react'

import { Grid } from '@mui/material'

import ImageContainer from '../common/ImageContainer.jsx'
import BookContent from './BookContent.jsx'

const path = '../../../assets/img/book-covers/harry_potter_and_the_methods_of_rationality.bmp'

const BookPresentation = () => (
  <Grid container spacing={2}>
    <Grid item>
      <ImageContainer src={path} height={400} />
    </Grid>
    <Grid item xs={true}>
      <BookContent></BookContent>
    </Grid>
  </Grid>
)

export default BookPresentation