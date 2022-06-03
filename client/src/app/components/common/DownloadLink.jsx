import React from 'react'

import { Link } from '@mui/material'
import FileDownloadIcon from '@mui/icons-material/FileDownload'

const DownloadLink = ({title, src}) => (
  <Link href={src} sx={{
    display: "flex",
    alignItems: "center"
  }}>
    <FileDownloadIcon />
    {title}
  </Link>
)

export default DownloadLink