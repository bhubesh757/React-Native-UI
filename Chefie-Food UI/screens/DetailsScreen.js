import React, { Component } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import COLORS from '../consts/colors'
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import {ButtonTwo} from '/home/bhubesh/react-native-proone/components/Button.js'

const  DetailsScreen = ({navigation , route}) => {
    const item = route.params;
    console.log(item);
    return (
      <SafeAreaView style = {{backgroundColor : COLORS.white}}> 
          <View style = {styles.header}>
          <Ionicons name="chevron-back-outline" size={24} color="black"  onPress = {navigation.goBack} />
          <Text style = {{fontSize : 20 , fontWeight : 'bold'}}>Details</Text>
          </View>

          {/* description */}

          <ScrollView showsVerticalScrollIndicator = {false}>
            <View style = {{justifyContent : 'center' , alignItems : 'center' , height : 280}}>
              <Image source = {item.image} style = {{height : 220 , width : 220}}></Image>
            </View>
            <View style = {styles.details}>

              <View style = {{flexDirection : 'row' , justifyContent : 'center' , alignItems : 'center'}}>
                <Text style = {{fontSize : 25 , fontWeight : 'bold' , color : COLORS.white}}> {item.name} </Text>
              <View style = {styles.iconContainer}>
              <MaterialIcons name="favorite-border" size={24} color= {COLORS.primary} />
              </View>
              
              </View>
              <Text style = {styles.detailsText}>
              {item.description}
              </Text>
              <View style = {{marginTop : 40 , marginBottom : 40}}>
                <ButtonTwo title = 'Add to Cart' ></ButtonTwo>
              </View>
            </View>

          </ScrollView>
      </SafeAreaView>
    )
  }


const styles = StyleSheet.create({
   header : {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20, 
   },
   details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.primary,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer : {
    backgroundColor : COLORS.white,
    height : 50,
    width : 50 ,
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 30
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    color: COLORS.white,
  },
})

export default DetailsScreen
