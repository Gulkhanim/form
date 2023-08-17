import { createContext, useContext, useState } from "react";


const personProfileInfo = createContext({})

 export const PersonProfileContext = ({children})=>{
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [biography, setBiography] = useState('')
  const [img, setImg] = useState('')

  const values = {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail,
    biography,
    setBiography,
    img,
    setImg
    
  }
    return <personProfileInfo.Provider value={values}>
        {children}
    </personProfileInfo.Provider>

 }



 export const useProfileContext = ()=>{
    const  obj = useContext(personProfileInfo)
    return obj

 }
