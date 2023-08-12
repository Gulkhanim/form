import React from 'react'
import { useProfileContext } from '../../context'

const PersonalInformation = () => {
  const {name, lastName, email} = useProfileContext()
  return (
    <div>
      <h2>Name:{name}</h2>
      <h2>Last Name:{lastName}</h2>
      <h4>Email:{email}</h4>
    </div>
  )
}

export default PersonalInformation