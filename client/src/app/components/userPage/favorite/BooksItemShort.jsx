import React from 'react'

import { Paper, Stack } from '@mui/material'

import ImageContainer from '../../common/ImageContainer.jsx'
import BookTitle from '../../bookItem/BookTitle.jsx'
import AuthorName from '../../bookItem/AuthorName.jsx'
import Rating from '../../common/Rating.jsx'
import FavoriteButton from '../../common/FavoriteButton.jsx'

const path = '../../../../assets/img/book-covers/harry_potter_and_the_methods_of_rationality.bmp'

const BooksItemShort = () => (
  <Paper sx={{
    padding: 2,
    borderRadius: "30px",
  }}>
    <Stack spacing={2} alignItems="center">
      <ImageContainer height="174px" src={path}/>
      <BookTitle>Harry Potter</BookTitle>
      <AuthorName>Joanne Rowling</AuthorName>
      <Stack direction="row" spacing={2}>
        <Rating>4.9</Rating>
        <FavoriteButton sx={{

        }}/>
      </Stack>
    </Stack>
  </Paper>
)

export default BooksItemShort