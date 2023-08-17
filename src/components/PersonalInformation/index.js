import React from 'react'
import './PersonalInfo.css'
import { useProfileContext } from '../../context'


const img =" "

const PersonalInformation = () => {
  const {name, lastName, email, biography, img} = useProfileContext()
  console.log("test", img )

  
  return (
    <div className='info'>
      <h1>Profile Information</h1>
      <h2>{name}</h2>
      <h2>{lastName}</h2>
      <h4>{email}</h4>
      <h4>not:{biography}</h4>
      <img src={img}/>Profile Image:{img}
    </div>
  )
}

export default PersonalInformation