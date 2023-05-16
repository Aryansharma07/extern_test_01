import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Authentication/Login';
import Register from './src/Authentication/Register';
import { initializeApp } from '@react-native-firebase/app';
// import firebase from '@react-native-firebase/app';


// const firebaseConfig = {
//   apiKey: "AIzaSyDMa97dmKFxzFfo_A3TqKGmm9J539sjlbA",
//   authDomain: "registration-d1fa0.firebaseapp.com",
//   projectId: "registration-d1fa0",
//   storageBucket: "registration-d1fa0.appspot.com",
//   messagingSenderId: "16812545017",
//   appId: "1:16812545017:web:e4a190146d436b6f01e328",
//   measurementId: "G-D4BSQ24XJY"
// };

// import { initializeApp } from '@react-native-firebase/app';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({})