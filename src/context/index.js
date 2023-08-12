import { createContext, useContext, useState } from "react";


const personProfileInfo = createContext({})

 export const PersonProfileContext = ({children})=>{
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const values = {
    name,
    setName,
    lastName,
    setLastName,
    email,
    setEmail
    
  }
    return <personProfileInfo.Provider value={values}>
        {children}
    </personProfileInfo.Provider>

 }



 export const useProfileContext = ()=>{
    const  obj = useContext(personProfileInfo)
    return obj

 }
