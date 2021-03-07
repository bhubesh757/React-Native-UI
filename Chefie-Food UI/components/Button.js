import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../consts/colors'

const Button = ({title , onPress}) => {
    return (
        <TouchableOpacity activeOpacity = {0.8} onPress = {onPress}>
                <View style = {styles.btnContainer}>
    <Text style = {styles.title}> {title}</Text>
                </View>
                
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btnContainer : {
        backgroundColor : COLORS.primary,
        height : 50,
        borderRadius : 30,
        justifyContent : 'center',
        alignItems : 'center'
    },
    title: {
        color : COLORS.white,
        fontWeight : 'bold',
        fontSize : 18,
    }
})
