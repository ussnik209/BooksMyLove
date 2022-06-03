import React from 'react'

import { Stack } from '@mui/material'

import EnhancedTable from './EnhancedTable.jsx'

const Admin = () => (
  <Stack spacing={2}>
    <Stack spacing={2}>
      <EnhancedTable>Users</EnhancedTable>
      
    </Stack>
    <Stack spacing={2}>
      <EnhancedTable>Books</EnhancedTable>
    </Stack>

  </Stack>
)

export default Admin