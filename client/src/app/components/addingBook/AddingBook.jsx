import React from 'react'
import { useState } from "react"


import { Paper, Stack } from '@mui/material'

import Subtitle from '../common/Subtitle.jsx'
import UserInput from '../common/UserInput.jsx'
import TextArea from '../common/TextArea.jsx'
import BooksUploader from './BooksUploader.jsx'

 const fileTypes = ["JPEG", "PNG", "GIF"]

const AddingBook = () => {
  const [file, setFile] = useState(null)
  const handleChange = (file) => {
    setFile(file)
  }

  return (
    <Paper sx={{
      borderRadius: '30px',
      padding: '50px 100px'
    }}
    >
      <Stack spacing={4}>
        <Stack  spacing={2}>
          <Subtitle>Provide information about Book</Subtitle>
          <UserInput label='Title' />
          <UserInput label='Author name' />
          <TextArea label='Description of the book' />
        </Stack>
        <Stack spacing={2}>
          <Subtitle>Upload book</Subtitle>
          <BooksUploader 
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
          />
        </Stack>
      </Stack>
    </Paper>
  )
}

export default AddingBook