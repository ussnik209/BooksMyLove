import React from 'react'

import InputCard from '../../common/InputCard.jsx'
import UploadImage from '../../common/UploadImage.jsx'
import SubmitButton from '../../common/SubmitButton.jsx'
import UserImage from './UserImage.jsx'

const UserImageCard = () => (
  <InputCard action="upload-image">
    <UserImage />
    <SubmitButton>
      <UploadImage />
    </SubmitButton>
  </InputCard>
)

export default UserImageCard