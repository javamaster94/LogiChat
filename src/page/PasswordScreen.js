import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/Input/Input';

const PasswordScreen = () => {
  return (
    <View
      style={{
        flex: 1        
         }}>
      
      
<View style={{
  flex:1,
  alignItems:"center",
  justifyContent:"center",backgroundColor:"pink"
  
}}>
  <Text style={{
        bottom:50,fontSize:20
      }}>ŞİFRE DEĞİŞTİRME EKRANI</Text>
 <View style={{
  justifyContent:"center",
  alignItems:"center",
  gap:10,
 }}>
 <Input placeholder="Eski Şifre" />
      <Input placeholder="Yeni Şifre" />
      <Input placeholder="Yeni Şifre Tekrar" />
 </View>
      </View>
    </View>
  );
};

export default PasswordScreen;
