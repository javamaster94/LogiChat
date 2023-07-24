import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input} from '../../components/Input/Input';
import {Input2} from '../../components/Input/input2';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home', {username: username});
  };
  const handleForgotPassword = () => {
    navigation.navigate('password');
  };

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffe4b5',
        }}>
        <Text style={{fontSize: 75, fontWeight: 'bold'}}>LogiChat</Text>

        <Image
          source={{
            uri: 'https://ct-lc.com/wp-content/uploads/2020/06/cropped-CT-LOGO-GRAD-1.png',
          }}
          style={{width: 200, height: 200}}
        />
      </View>

      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#ffe4b5',
          gap:10,
          
        }}>
        <Input placeholder="Kullanıcı adı" />
        <Input placeholder="Şifre" />

        <TouchableOpacity
          style={{
            backgroundColor: 'tomato',
            paddingVertical: 20,
            paddingHorizontal: 20,
            borderRadius: 20,
            top: 20,
          }}
          onPress={handleLogin}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            Giriş
          </Text>
        </TouchableOpacity>

        <Pressable onPress={() => navigation.navigate('Password')}>
          <Text style={{
            top:70
          }}> Şifreni mi unuttun ? Değiştirmek için tikla. </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
