import React, { Component } from 'react'
import { SafeAreaView, Text, View , Image, StyleSheet } from 'react-native'
import Button from '../components/Button';
// import { Image } from 'react-native-svg'
import COLORS from '/home/bhubesh/react-native-proone/consts/colors.js'
const OnBoardScreen = ({navigation}) => {
  
    return (
      <SafeAreaView style = {{flex : 1, backgroundColor : COLORS.white}}>
          <View style = {{height : 400}}>
            <Image style = {{
              width : '100%',
              resizeMode : 'contain' ,
              top : -150
            }}
            source = {require('../assets/onboardImage.png')}
            ></Image>
          </View>
          <View   style = {styles.textContainer} >

          <View>
            <Text style = {{
              fontSize : 32 , 
              fontWeight : 'bold',
              textAlign :' center'
            }}>
              Delicious Food
            </Text>
            <Text style = {{
              marginTop : 20 , 
              fontSize : 18 ,
              textAlign : 'center',
              color : COLORS.grey
            }}>
              Discover the best food & drinks
            </Text>
          </View>
          {/* this view is for indicators */}
            <View style = {styles.indicatorContainer}>
                <View style = {styles.currentIndicator}></View>
                <View style = {styles.indicator}></View>
                <View style = {styles.indicator}></View>
            </View>
            <Button title = "Get Started" onPress = {() => navigation.navigate('Home')}></Button>
          </View>
      </SafeAreaView>
    )
  }



const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});
export default OnBoardScreen
