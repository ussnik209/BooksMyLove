import React from 'react'

import { Stack } from '@mui/material'

import UserTable from './UserTable.jsx'
import EnhancedTable from './EnhancedTable.jsx'

const Admin = () => (
  <Stack spacing={2}>
    <Stack spacing={2}>
      <UserTable title='User'></UserTable>
      
    </Stack>
    <Stack spacing={2}>
      {/* <EnhancedTable title='Books'></EnhancedTable> */}
    </Stack>

  </Stack>
)

export default Admin