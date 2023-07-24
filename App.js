import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/page/HomeScreen';
import LoginScreen from './src/page/LoginScreen';
import PasswordScreen from './src/page/PasswordScreen';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={LoginScreen} />    
        <Stack.Screen name="Home" component={HomeScreen} />    
        <Stack.Screen name="Password" component={PasswordScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
