import React, { Component } from 'react'
import { Text, View , Icon} from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import { AntDesign } from '@expo/vector-icons'; 
import COLORS from '../consts/colors';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator()

export class BottomNavigator extends Component {
  render() {
    return (
     <Tab.Navigator tabBarOptions = {{

       style : {
         height : 55,
         borderTopWidth : 0,
         elevation : 0
       },
       showLabel : false,
       activeTintColor : COLORS.primary
     }}


     >
          <Tab.Screen 
          name = 'HomeScreen' 
          component = {HomeScreen} 
          options = {{tabBarIcon : ({color}) => 
          <AntDesign name="home" size={20} color={color}  />}}
          ></Tab.Screen>

          <Tab.Screen 
          name = 'LocalMall' 
          component = {HomeScreen} 
          options = {{tabBarIcon : ({color}) => 
          <MaterialIcons name="local-mall" size={20} color="black" />}}
          ></Tab.Screen>

<Tab.Screen 
          name = 'Search' 
          component = {HomeScreen} 
          options = {{tabBarIcon : ({color}) => (
            <View  style = {{
              height : 50,
              width : 50,
              justifyContent : 'center',
              alignItems : 'center',
              backgroundColor : COLORS.white,
              borderColor : COLORS.primary,
              borderWidth : 2,
              borderRadius : 30,
              top : -20,
              elevation : 5

            }}>
              <FontAwesome name="search" size={20} color= {COLORS.primary} />
            </View>
           
          )
        }}
          ></Tab.Screen>

          <Tab.Screen 
          name = 'Favourite' 
          component = {HomeScreen} 
          options = {{tabBarIcon : ({color}) => 
          <MaterialIcons name="favorite-outline" size={20} color="black" />}}
          ></Tab.Screen>

          <Tab.Screen 
          name = 'Cart' 
          component = {CartScreen} 
          options = {{tabBarIcon : ({color}) => 
          <AntDesign name="shoppingcart" size={20} color="black" />}}
          ></Tab.Screen>
     </Tab.Navigator>
    )
  }
}

export default BottomNavigator
