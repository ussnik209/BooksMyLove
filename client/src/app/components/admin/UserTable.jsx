import React from 'react'

import { Checkbox } from '@mui/material'

import EnhancedTable from './EnhancedTable.jsx'


const UserTable = (props) => {
  function createData(name, surname, email, isAuthor, locked) {
    return {
      name,
      surname,
      email,
      isAuthor,
      locked,
    }
  }
  
  const handleIsAuthorClick = (event) => {
    event.stopPropagation()
  }
  
  const rows = [
    createData(
      'John', 
      'Colt', 
      'email@mail.com',
      <Checkbox checked={false} onClick={handleIsAuthorClick}/>,
      false),
    createData(
      'Day', 
      'Bolt', 
      'email@mail.com', 
      <Checkbox checked={true} onClick={handleIsAuthorClick}/>,
      true),
  ] 
  
  const headCells = [
    {
      id: 'name',
      disablePadding: false,
      label: 'name',
      sortable: true,
    },
    {
      id: 'surname',
      disablePadding: false,
      label: 'surname',
      sortable: true,
    },
    {
      id: 'email',
      disablePadding: false,
      label: 'email',
      sortable: true,
    },
    {
      id: 'isAuthor',
      disablePadding: false,
      label: 'Author',
      sortable: true
    },
    {
      id: 'action',
      disablePadding: false,
      label: 'action',
      sortable: false,
    },
  ]

  return (
    <EnhancedTable {...props} rows={rows} headCells={headCells}/>
  )
}

export default UserTable