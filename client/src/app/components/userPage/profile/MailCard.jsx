import React from 'react'

import InputCard from '../../common/InputCard.jsx'
import SubmitButton from '../../common/SubmitButton.jsx'
import UserInput from '../../common/UserInput.jsx'

const MailCard = () => (
  <InputCard action="send-mail">
    <UserInput label="Email address" defaultValue="email@mail.com"/>
    <SubmitButton>Change email</SubmitButton>
  </InputCard>
)

export default MailCard