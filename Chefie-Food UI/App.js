import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import BottomNavigator from './navigation/BottomNavigator';
import DetailsScreen from './screens/DetailsScreen';
import OnBoardScreen from './screens/OnBoardScreen';
import COLORS from '/home/bhubesh/react-native-proone/consts/colors.js'
const Stack = createStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
     <StatusBar backgroundColor = 'transparent' barStyle = 'dark-content'></StatusBar>
        <Stack.Navigator initialRouteName = 'BoardScreen' screenOptions = {{headerShown : false}} >
          <Stack.Screen name = 'BoardScreen' component = {OnBoardScreen}></Stack.Screen>
          <Stack.Screen name = 'Home' component = {BottomNavigator}></Stack.Screen>
          <Stack.Screen name = 'DetailsScreen' component = {DetailsScreen}></Stack.Screen>
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
