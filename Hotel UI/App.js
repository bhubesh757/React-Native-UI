import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './src/views/screens/HomeScreen'
import DetailsScreen from './src/views/screens/DetailsScreen'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor = 'transparent' barStyle = 'dark-content'></StatusBar>
       <Stack.Navigator initialRouteName = 'Home' screenOptions = {{headerShown : false}} >
         <Stack.Screen name = 'Home' component = {HomeScreen}></Stack.Screen>
         {/* <Stack.Screen name = 'Details' component = {DetailsScreen}></Stack.Screen> */}
       </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
