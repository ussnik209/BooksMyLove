import React from 'react'

import { 
  Card,
  CardContent,
  CardActions,
  Container
 } from '@mui/material'

 import BookTitle from './BookTitle.jsx'
 import AuthorName from './AuthorName.jsx'
 import BookDescription from './BookDescription.jsx'
 import ImageContainer from '../common/ImageContainer.jsx'
 import Rating from '../common/Rating.jsx'
 import FavoriteButton from '../common/FavoriteButton.jsx'

 const imagePath = '../../../assets/img/book-covers/harry_potter_and_the_methods_of_rationality.bmp'

const BooksItem = () => (
  <Card sx={{
    display: 'flex',
    borderRadius: '30px',
    padding: '15px'
  }}>
    <ImageContainer src={imagePath} height={200}></ImageContainer>
    <CardContent sx={{position: 'relative'}}>
      <BookTitle>Harry Potter</BookTitle>
      <AuthorName>Joanne Rowling</AuthorName>

      <BookDescription>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, aliquid cumque? Quaerat accusamus necessitatibus error quis. Incidunt vel ipsam minus molestias, id earum consequatur, deserunt pariatur a, mollitia repellendus doloremque!  
      </BookDescription>

      <CardActions>
      <Rating>
        4.9
      </Rating>
      <FavoriteButton />
      </CardActions>      
    </CardContent>
    
  </Card>
)

export default BooksItem