import React from 'react'
import { TextInput } from 'react-native'

export const Input2 = ({placeholder2}) => {
  return (
   <TextInput placeholder={placeholder2} style={{
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    width: 190,
    paddingLeft: 15,
    backgroundColor:"orange"
    
   }}>

   </TextInput>
  )
}
