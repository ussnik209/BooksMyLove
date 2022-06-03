import React from 'react'
import DropZone from 'react-dropzone'

import { Stack } from '@mui/material'

import ImageContainer from '../common/ImageContainer.jsx'

const BooksUploader = ({multiple, handleChange, name, types}) => {
  
  return (
    <DropZone onDrop={acceptedFiles => console.log(acceptedFiles)}>
      {({getRootProps, getInputProps}) => (
        <div {...getRootProps()} className='dropbox'>
          <input {...getInputProps()} />
          <Stack alignItems='center'>
            <p>Drag 'n' drop some files here, or click to select files</p>
            <ImageContainer 
              src='../../../assets/img/backgrounds/Share.bmp' 
              height='120px'
            />
          </Stack>
        </div>
      )}
    </DropZone>
  )
}

export default BooksUploader