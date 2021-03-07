import { Icon } from 'native-base'
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View ,Image } from 'react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../consts/colors'
import { MaterialIcons } from '@expo/vector-icons'; 
import categories from '../consts/categories'

const HomeScreen = () => {

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)
  
  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.primary
                    : COLORS.secondary,
                    height: 45,
                    width: 120,
                    marginRight: 7,
                    borderRadius: 30,
                    alignItems: 'center',
                    paddingHorizontal: 5,
                    flexDirection: 'row',
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 35, width: 35, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style = {{
      flex : 1,
      backgroundColor : COLORS.white
    }}> 
      <View style = {styles.header}>
        <View>
          <View style = {{flexDirection : 'row'}}>
            <Text style = {{fontSize : 26}}>Hello,</Text>
            <Text style = {{fontSize : 26 , fontWeight : 'bold' , marginLeft : 10 }}>Bhubesh</Text>
          </View>
          <Text style = {{marginTop : 5, fontSize : 20 , color : COLORS.grey}}>Need a Delicious Food!!</Text>
        </View>
        <Image source = {require('/home/bhubesh/react-native-proone/assets/catergories/face.jpg')} style = {{
          height : 50 , width : 50 , borderRadius : 25
        }}></Image>
      </View>

      {/* search bar */}

      <View style = {{
        marginTop : 30 ,
        flexDirection : 'row',
        paddingVertical : 20
      }}>
        <View style = {styles.inputContainer}>
          <Icon name = 'search' size = {28}>
           <TextInput style = {{flex : 1 , fontSize : 18}}
           placeholder = 'Search for  Food'
           >

           </TextInput>
          </Icon>
        </View>
        <View style = {styles.sortBtn}>
        <MaterialIcons name="tune" size={24} color="black" />
        </View>
      </View>
      <View>

      <ListCategories></ListCategories>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header : {
    marginTop : 20,
    flexDirection : 'row',
    justifyContent : 'space-between',
    paddingHorizontal : 20
  },
  inputContainer : {
    height : 50,
    borderRadius : 10,
    flex : 1,
    flexDirection : 'row',
    backgroundColor : COLORS.light,
    alignItems : 'center',
    paddingHorizontal : 20
  },
  sortBtn : {
    width : 50,
    height: 50,
    marginLeft : 10 ,
    backgroundColor : COLORS.primary,
    borderRadius : 10 ,
    justifyContent : 'center',
    alignItems : 'center'
  },
  categoriesListContainer : {
    paddingVertical : 10,
    alignItems : 'center',
    paddingHorizontal : 20,
    // marginLeft : -20
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
