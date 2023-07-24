import React from 'react'
import { TextInput } from 'react-native'

export const Input = ({placeholder}) => {
  return (
   <TextInput placeholder={placeholder} style={{
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    width: 190,
    paddingLeft: 15,
    backgroundColor:"white",
    marginTop:5
    
    
    
   }}>

   </TextInput>
  )
}
