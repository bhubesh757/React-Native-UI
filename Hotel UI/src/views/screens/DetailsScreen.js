import React from 'react'
import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import COLORS from '../../consts/colors';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const DetailsScreen = ({navigation , route}) => {
    const item = route.params;
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    return (
        <ScrollView contentContainerStyle = {{
            backgroundColor : COLORS.white,
            paddingBottom : 20
        }} 
        showsVerticalScrollIndicator = {false}
        >
            <StatusBar barStyle = 'light-content' translucent backgroundColor = 'rgba(0,0,0,0)'></StatusBar>
                <ImageBackground source = {item.image} style = {styles.headerImage}> 
                        <View style = {styles.header}>
                        <Ionicons name="caret-back-circle-outline" size={32} color= {COLORS.white}
                        onPress = {navigation.goBack}
                        />
                        <Ionicons name="bookmarks-outline" size={32} color= {COLORS.white} />
                        </View>
                 </ImageBackground>
                 <View style = {styles.iconContainer}>
                 <Ionicons name="location-outline" size={30} color= {COLORS.white} />
                 </View>
                 <View style = {{marginTop : 20 , paddingHorizontal : 20 }}>
                     <Text style = {{fontSize : 20 , fontWeight : 'bold'}}> {item.name} </Text>
                     <Text style = {{fontSize : 20 , fontWeight : 400 , color : COLORS.grey , marginTop : 5}}> {item.locations} </Text>
                     <View style = {{marginTop : 10 , flexDirection : 'row' , justifyContent : 'space-between'}}>
                        <View style = {{flexDirection : 'row'}}>
                            <View style = {{flexDirection : 'row'}}>
                            <AntDesign name="star" size={24} color= {COLORS.orange} />
                            <AntDesign name="star" size={24} color= {COLORS.orange} />
                            <AntDesign name="star" size={24} color= {COLORS.orange} />
                            <AntDesign name="star" size={24} color= {COLORS.orange} />
                            <AntDesign name="star" size={24} color= {COLORS.grey} />
                            </View>
                            <Text style = {{fontSize : 18  ,fontWeight : 'bold' , marginLeft : 5}}> 4.0 </Text>
                        </View>
                        <Text style = {{fontSize : 13 , color : COLORS.grey}} > 1235 reviews </Text>
                     </View>
                     <View style={{marginTop: 20}}>
            <Text style={{lineHeight: 20, color: COLORS.grey}}>
              {item.details}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per night
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}>
                ₹{item.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: COLORS.grey,
                marginLeft: 5,
              }}>
              +breakfast
            </Text>
          </View>
        </View>
        <View style={styles.btn}>
          <Text style={{color: COLORS.white, fontSize: 18, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
        <View>
                 </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    headerImage : {
        height : 400,
        borderBottomRightRadius : 40,
        borderBottomLeftRadius : 40,
        overflow : 'hidden'
    },
    header: {
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        justifyContent: 'space-between',
      },
      iconContainer: {
        position: 'absolute',
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        top: -30,
        right: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn: {
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: COLORS.primary,
        marginHorizontal: 20,
        borderRadius: 10,
      },
      priceTag: {
        height: 40,
        alignItems: 'center',
        marginLeft: 40,
        paddingLeft: 20,
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
      },
})
export default DetailsScreen

