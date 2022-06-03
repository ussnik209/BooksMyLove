import React from 'react'

import { Box } from '@mui/material'
import { Stack } from '@mui/material'
 
import BookTitle from '../bookItem/BookTitle.jsx'
import AuthorName from '../bookItem/AuthorName.jsx'
import BookDescription from '../bookItem/BookDescription.jsx'
import Rating from '../common/Rating.jsx'
import FavoriteButton from '../common/FavoriteButton.jsx'
import DownloadLink from '../common/DownloadLink.jsx'

const path = '../../../assets/pdf/Harry-Potter-and-the-Methods-of-Rationality.pdf'

const BookContent = () => (
  <Box sx={{
    position: 'relative'
  }}>
    <BookTitle>Harry Potter</BookTitle>
    <AuthorName>Joanne Rowling</AuthorName>
    <Stack direction="row" spacing={2}>
      <Rating>4.9</Rating>
      <DownloadLink title="Harry Potter" src={path}/>
    </Stack>
    <BookDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil rem ad laudantium laboriosam. Nobis dolor sed molestias non sit, similique dicta quidem laborum velit eveniet magnam in eius, officiis rem.</BookDescription>
    <FavoriteButton></FavoriteButton>
  </Box>
)

export default BookContent