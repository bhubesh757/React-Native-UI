import React, { useRef, useState } from 'react'
import { Animated, Dimensions, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import COLORS from '/home/bhubesh/react-native-proone/src/consts/colors.js'
import { AntDesign } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
// import { AntDesign } from '@expo/v ector-icons'; 
import DetailsScreen from './DetailsScreen';

import hotels from '/home/bhubesh/react-native-proone/src/consts/hotels.js'
// import { Card } from 'react-native-ui-lib';
// resizing the width

const {width} = Dimensions.get('screen');
// cardwidth of the card
const cardWidth  = width / 1.4


const HomeScreen = ({navigation}) => {

  // adding a active card index

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // using useRef
const ScrollX = useRef(new Animated.Value(0)).current;
// scrollx is used for the animation

  // using usestate for the selected and unselected 
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
  // creating a category list

  const CategoryList = () => {
    return (
      <View style = {styles.categorylistcontainer}>
        {categories.map((item , index)=> (
          <TouchableOpacity key = {index} activeOpacity  = {0.8} onPress = {() => setSelectedCategory(index)} >
            <View  > 
            <Text style = {{ fontSize : 17,
    fontWeight : "bold",
    color :  selectedCategory == index ? COLORS.primary : COLORS.grey
    }}>{item} </Text>
    {selectedCategory == index &&
    (

    <View style = {{height : 3 , width : 30 , backgroundColor : COLORS.primary ,marginTop : 2}}>
    </View>
    )
    }

            </View>
          </TouchableOpacity>
        ))}
      </View>
    )
  } 

  // Creating a Cards


  const Card = ({hotel , index}) => {

    const inputRange = [(index -1) * cardWidth,
    index * cardWidth ,
    (index + 1) * cardWidth
    ];
    // Adding a opacity to the card
    const opacity = ScrollX.interpolate({inputRange ,
    outputRange :[0.7 , 0 , 0.7] 
    })
    const scale = ScrollX.interpolate({inputRange ,
    outputRange :[0.8 , 1 , 0.8] 
    })

    return (
      <TouchableOpacity 
      disabled = {activeCardIndex != index}
      activeOpacity = {1} onPress = {() => navigation.navigate('DetailsScreen' , hotel)}>

      <Animated.View style = {{ height: 280,
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: COLORS.white, transform : [{scale}]
    }}>
      {/* this animates the card and changes the opacity */}
      <Animated.View style = {{ height : 280,
    backgroundColor : COLORS.white,
    position : 'absolute' ,
    zIndex : 100,
    width : cardWidth,
    borderRadius : 30 , opacity}}/>

      <View style = {styles.priceTag}>
        <Text style = {{color : COLORS.white , fontSize : 17}}>  ₹{hotel.price} </Text>
      </View>
      <Image source = {hotel.image} style = {styles.cardImage} ></Image>

      {/* card details */}

      <View style = {styles.cardDetails}>
        <View style = {{flexDirection : 'row'}}>
        <Text style = {{fontWeight : 'bold' , 
        fontSize : 17
      }}> {hotel.name} </Text>

        <Text style = {{color : COLORS.grey , 
        fontSize : 15
      }}> {hotel.location} </Text>
      <Feather name="bookmark" size={24} color="black" />
      </View>
      <View style = {{flexDirection : 'row' , justifyContent : 'space-between' , marginTop : 10}}>
          <View style = {{flexDirection : 'row'}}>
          <AntDesign name="star" size={15} color= {COLORS.orange} />
          <AntDesign name="star" size={15} color= {COLORS.orange} />
          <AntDesign name="star" size={15} color= {COLORS.orange} />
          <AntDesign name="star" size={15} color= {COLORS.orange} />
          <AntDesign name="star" size={15} color= {COLORS.grey} />
          </View>
      </View>
      <Text style = {{fontSize : 10 , color : COLORS.grey}}> 521 Reviews</Text>
      </View>
    </Animated.View>
      </TouchableOpacity>
    )
  }

  //adding another card which is small card , related to the hotels card selected

  const TopHotelCard = ({hotel}) => {
    return (
        <View style = {styles.topHotelCard}>
          <View style = {{position : 'absolute' , top : 5 , 
          right  : 5 , zIndex : 1 , flexDirection : 'row' 
        }}>
          <AntDesign name="star" size={15} color= {COLORS.orange} />
          <Text style = {{color : COLORS.white , fontWeight : 'bold' , fontSize : 15}}></Text>
        </View>
          <Image style = {styles.topHotelCardImage} source = {hotel.image}></Image>
          <View style = {{paddingVertical : 5 , paddingHorizontal : 5}}>
            <Text style = {{fontWeight : 'bold' , fontSize : 10 }} > {hotel.name} </Text>
            <Text style = {{fontWeight : 'bold' , fontSize : 7  , color : COLORS.grey }}  > {hotel.name} </Text>
          </View>
        </View>
    )
  }


  return (
   <SafeAreaView style = {{flex : 1, backgroundColor : COLORS.white}}>
      <View style = {styles.header}>
        <View style = {{paddingBottom : 15 }}>
          <Text style = {{fontSize : 20 , fontWeight : 'bold'}}> Find your Hotel </Text>
        
        <View style = {{flexDirection : 'row'}}>
            <Text style = {{fontSize : 30 , fontWeight : 'bold'}}>in </Text>
            <Text style = {{fontSize : 30 , fontWeight : 'bold' , color : COLORS.primary }}>chennai </Text>
        </View>
        </View>
      <AntDesign name="user" size={35} color= {COLORS.grey} />
      </View>
      
      <ScrollView showsVerticalScrollIndicator  = {false}>
          <View style = {styles.searchInputContainer} >
          <AntDesign name="search1" size={30} color="black" />
          <TextInput placeholder  = 'Search' style = {{fontSize : 20 , paddingLeft : 10}}></TextInput>
          </View>
          <CategoryList></CategoryList>

          {/* Card which is scrollable */}

          {/* use Flatlsit */}
        <View>

       
          <Animated.FlatList 
           onMomentumScrollEnd={(e) => {
            setActiveCardIndex(
              Math.round(e.nativeEvent.contentOffset.x / cardWidth),
            );
          }}
          onScroll = {Animated.event([{nativeEvent : {
            contentOffset : {x : ScrollX}
          }}],
          
          {useNativeDriver : true}
          )}
          horizontal contentContainerStyle = {{paddingVertical : 30 , paddingLeft : 20 , paddingRight : cardWidth/2 - 40 }} data = {hotels}
        showsHorizontalScrollIndicator = {false}
        renderItem = {({item , index}) => <Card hotel = {item} index = {index}></Card> }
        snapToInterval = {cardWidth}
        >  

          </Animated.FlatList>
          </View>
          <View style = {{flexDirection : 'row' , justifyContent : 'space-between' ,
          marginHorizontal : 20
        }}>
            <Text style = {{fontWeight : 'bold', color : COLORS.grey}}> Top Hotels </Text>
            <Text style = {{fontWeight : 'bold', color : COLORS.grey}}> Show All </Text>
          </View>

          {/* another card */}
          <FlatList horizontal showsHorizontalScrollIndicator = {false}
          contentContainerStyle = {{paddingLeft : 20 , marginTop : 20  , paddingBottom : 30}}
          renderItem = {({item}) => <TopHotelCard hotel = {item}></TopHotelCard>}
          data = {hotels}
          >

          </FlatList>
      </ScrollView>
   </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  header : {
    marginTop : 20,
    flexDirection : 'row',
    justifyContent : 'center',
    paddingHorizontal : 20
  },
  // the search abr components in the page
  searchInputContainer : {
    height : 50,
    backgroundColor : COLORS.light,
    marginTop : 15,
    marginLeft : 20,
    borderTopLeftRadius : 30,
    borderBottomLeftRadius : 30,
    flexDirection : 'row',
    alignItems : 'center'
  },
  categorylistcontainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginHorizontal : 20,
    marginTop : 30
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: COLORS.primary,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDetails : {
    height: 100,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    position: 'absolute',
    bottom: 0,
    padding: 20,
    width: '100%',
  },
  topHotelCard: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 80,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  // card : {
  //   height : 280,
  //   backgroundColor : COLORS.white,
  //   position : 'absolute' ,
  //   zIndex : 100,
  //   width : cardWidth,
  //   borderRadius : 30
  // }
})
