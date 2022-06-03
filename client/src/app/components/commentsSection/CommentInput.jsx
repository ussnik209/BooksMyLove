import React from 'react'

import { 
  Avatar,
  TextField, 
  Stack, 
  IconButton,
  Button,
 } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

const CommentsInput = ({src}) => (
  <>
    <Stack 
      direction="row" 
      spacing={2} 
      sx={{
        position: "relative"
      }}
    >
      <Avatar 
        alt="avatar" 
        src={src}
        sx={{
          height: 80, 
          width: 80
        }} 
      />
      <TextField 
        id="comment-input" 
        label="Leave your comment" 
        variant="standard"
        sx={{
          width: "100%",
        }} 
      >
      </TextField>
      <IconButton className="clear-button">
        <ClearIcon></ClearIcon>
      </IconButton>
    </Stack>
    <Stack direction="row-reverse">
      <Button variant="contained">Send</Button>
    </Stack>
  </>
)

export default CommentsInput