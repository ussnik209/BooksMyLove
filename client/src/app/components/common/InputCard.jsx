import React from 'react'

import { Paper, Box, Stack } from '@mui/material'

const InputCard = ({children, action}) => (
  <Paper sx={{
    padding: "30px",
    borderRadius: "30px"
  }}>
    <Box component="form" action={action}>
      <Stack 
        spacing={2}
        alignItems="center"
      >
        {children}
      </Stack>
    </Box>
  </Paper>
)

export default InputCard