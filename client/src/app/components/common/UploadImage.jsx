import React from 'react'

const UploadImage = () => (
  <>
    <input id="file-input" className="upload-input" type="file" name="file" multiple/>
    <label htmlFor="file-input" className="upload-input__label">Choose image</label>
	</>
)

export default UploadImage