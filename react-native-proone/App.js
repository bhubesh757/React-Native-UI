import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SignUpScreen } from './screens';
const Stack = createStackNavigator();
import Tabs from './navigation/Tabs'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border : 'transparent'
  }
}

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown : false}} 
        initialRouteName = {Tabs}
        >
        <Stack.Screen name = 'SignUp' component = {SignUpScreen}></Stack.Screen>
        <Stack.Screen name = 'Home' component = {Tabs}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
