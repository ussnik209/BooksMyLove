import React from 'react'

import EnhancedTable from './EnhancedTable.jsx'
import DeleteButton from './DeleteButton.jsx'


const BookTable = (props) => {
  function createData(name, author, rating, deleteBook) {
    return {
      name,
      author,
      rating,
      deleteBook,
    }
  }
  
  
  const rows = [
    createData(
      'Harry Potter', 
      'Joanne Rowling', 
      '4,9',
      <DeleteButton />),
    createData(
      'Endless book', 
      'Michael Ende', 
      '4,5', 
      <DeleteButton />)
  ] 
  
  const headCells = [
    {
      id: 'name',
      disablePadding: false,
      label: 'name',
      sortable: true,
    },
    {
      id: 'author',
      disablePadding: false,
      label: 'author',
      sortable: true,
    },
    {
      id: 'rating',
      disablePadding: false,
      label: 'rating',
      sortable: true,
    },
    {
      id: 'delete',
      disablePadding: false,
      label: 'delete',
      sortable: false
    },
  ]

  return (
    <EnhancedTable {...props} rows={rows} headCells={headCells}/>
  )
}

export default BookTable