import React from 'react'

import BooksList from '../booksList/BooksList.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

const Homepage = () => (
  <>
    <SectionHeader>All books</SectionHeader>
    <BooksList></BooksList>
  </>
)

export default Homepage