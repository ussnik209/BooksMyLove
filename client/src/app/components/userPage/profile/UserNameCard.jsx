import React from 'react'

import UserInput from '../../common/UserInput.jsx'
import InputCard from '../../common/InputCard.jsx'
import SubmitButton from '../../common/SubmitButton.jsx'

const UserNameCard = () => (
  <InputCard action="change-name">
    <UserInput label="name" defaultValue="Jonny"/>
    <UserInput label="surname" defaultValue="Joster"/>
    <SubmitButton>Change name</SubmitButton>
  </InputCard>
)

export default UserNameCard