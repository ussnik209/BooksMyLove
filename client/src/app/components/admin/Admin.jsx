import React from 'react'

import { Stack } from '@mui/material'

import UserTable from './UserTable.jsx'
import BookTable from './BookTable.jsx'

const Admin = () => (
  <Stack spacing={2}>
    <Stack spacing={2}>
      <UserTable title='User'></UserTable>
      
    </Stack>
    <Stack spacing={2}>
      <BookTable title='Books'></BookTable>
    </Stack>

  </Stack>
)

export default Admin