import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity , TouchableWithoutFeedback,
modal , FlatList , ScrollView, KeyboardAvoidingView, Platform, Image, TextInput, Modal , 
} from 'react-native'


// linear gadient

import { LinearGradient } from 'expo-linear-gradient';
// from constants

import { COLORS, FONTS, icons, images, SIZES } from '../constants'
// import { NavigationContainer } from '@react-navigation/native';
// import { Image } from 'react-native-ui-lib/generatedTypes/components/image';

const SignUpScreen = ({navigation}) => {


    // using usestate

    
    const [showPassword, setshowPassword] = useState(false)
    const [areas, setareas] = useState([])
    const [selectedArea, setselectedArea] = useState(null)
    const [modalVisible, setmodalVisible] = useState(false)
    // renderHeader


useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(
        data => {
            // console.log(DataTransferItemList);
            let areaData = data.map(item => {
                return{
                    
                  code : item.alpha2Code,
                  name : item.name,
                  callingCode : `+${item.callingCodes[0]}`,
                  flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`

                }
            })


            setareas(areaData)

            if(areaData.length > 0) {
                let defaultData = areaData.filter(a => a.code == 'IN')

                if(defaultData.length > 0) {
                    setselectedArea(defaultData[0])
                }
            }
        }
    )
}, [])

    function renderHeader() {
        return (
            <TouchableOpacity
            style = {{
                flexDirection : 'row',
                alignItems : 'center',
                marginTop : SIZES.padding * 3,
                paddingHorizontal: SIZES.padding * 2
            }}
            onPress = {() => console.log('SignUP')}
            >
                <Image source = {icons.back}
                resizeMode = 'contain'
                style = {
                    {
                        width : 20,
                        height : 20 ,
                        tintColor : COLORS.white
                    }
                }
                ></Image>

                <Text
                style = {{
                    marginLeft : SIZES.padding * 1.5 , 
                    color : COLORS.white , ...FONTS.h4
                }}
                >Sign Up</Text>
            </TouchableOpacity>
        )
    }

    // logo


    function renderLogo() {
        return(
            <View
            style ={{
                marginTop : SIZES.padding * 5,
                height : 100,
                alignItems : 'center',
                justifyContent : 'center'
            }}
            >
                <Image
                source = {images.wallieLogo}
                resizeMode = 'contain'
                style = {{
                    width : '60%'
                }}
                >

                </Image>
            </View>
        )
    }

    // renderForm

    function renderForm(){
        return(
            <View
            style = {{
                marginTop : SIZES.padding *3,
                marginHorizontal : SIZES.padding * 3
            }}
            >
                {/*creating a for full name  */}

                <View style = {{
                    marginTop : SIZES.padding * 3
                }}>
                    <Text
                    style = {{
                        color : COLORS.lightGreen ,
                        ...FONTS.body3
                    }}
                    >Full Name</Text>

                    <TextInput
                    style = {{
                        marginVertical : SIZES.padding,
                        marginbottomColor : COLORS.white,
                        height : 40,
                        color : COLORS.white,
                        ...FONTS.body3

                    }}
                    placeholder =  'Enter Full Name'
                    placeholderTextColor = {COLORS.white}
                    selectionColor = {COLORS.white}
                    >

                    </TextInput>
                </View>

                {/* phone Number */}

                <View
                style = {{
                    marginTop : SIZES.padding * 3
                }}
                >
                    <Text
                    style = {{
                        color : COLORS.lightGreen,
                        ...FONTS.body3
                    }}
                    >
                        Phone Number
                    </Text>

                    <View style ={{flexDirection : 'row'}}>
                        {/* Country Code */}
                        <TouchableOpacity
                        style = {{
                            width : 100,
                            height : 50,
                            marginHorizontal : 5,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth : 1,
                            flexDirection : 'row',
                            ...FONTS.body2
                        }}
                        // onPress = {() => console.log('show modal')}
                        onPress = {() => setmodalVisible(true) }

                        >
                            <View
                            style = {{
                                justifyContent : 'center'
                            }}
                            >
                                <Image
                                source = {icons.down}
                                style = {{
                                    width : 10,
                                    height : 10 ,
                                    tintcolor : COLORS.white
                                }}
                                ></Image>
                            </View>

                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Image
                                    source= {{uri : selectedArea?.flag }}
                                    resizeMode="contain"
                                    style={{
                                        width: 30,
                                        height: 30
                                    }}
                                />
                            </View>
                            <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{selectedArea?.callingCode}</Text>
                            </View>
                        </TouchableOpacity>

                        {/* Phone Number */}

                        <TextInput style = {{
                            flex : 1,
                            marginVertical : SIZES.padding,
                            borderBottomWidth: 1,
                            borderBottomColor : COLORS.white,
                            height : 40,
                            color : COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder = 'Enter Phone Number'
                        placeholderTextColor = {COLORS.white}
                        selectionColor = {COLORS.white}
                        ></TextInput>

                    </View>
                </View>

                {/* Password */}

                <View style={{ marginTop: SIZES.padding * 2 }}>
                    <Text style={{ color: COLORS.lightGreen, ...FONTS.body3 }}>Password</Text>
                    <TextInput
                        style={{
                            marginVertical: SIZES.padding,
                            borderBottomColor: COLORS.white,
                            borderBottomWidth: 1,
                            height: 40,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                        placeholder="Enter Password"
                        placeholderTextColor={COLORS.white}
                        selectionColor={COLORS.white}
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 0,
                            bottom: 10,
                            height: 30,
                            width: 30
                        }}
                        onPress={() => setshowPassword(!showPassword)}
                        // onPress = {() => console.log(toggle)}
                    >
                        <Image
                            // source = {icons.eye}
                            source={showPassword ? icons.disable_eye : icons.eye}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>
     
            </View>
        )
    }

    function renderButton(){
        return (
            <View style = {{
                margin : SIZES.padding * 3
            }}>
                <TouchableOpacity
                style = {{
                    height : 40 ,
                    backgroundColor : COLORS.black,
                    borderRadius : SIZES.radius / 1.5,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}
                onPress = {() => navigation.navigate('Home')}
                >
                    <Text style = {{
                        color : COLORS.lightGreen ,
                        ...FONTS.h3
                    }}>

                        Continue
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }


    function renderAreaCodesModal(){

        const renderItem = ({item}) => {
            <TouchableOpacity
            style={{ padding: SIZES.padding, flexDirection: 'row' }}
            onPress={() => {
                setselectedArea(item)
                setmodalVisible(false)
            }}
            >
                 <Image
                        source={{ uri: item.flag }}
                        style={{
                            width: 30,
                            height: 30,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body4 }}>{item.name}</Text>

            </TouchableOpacity>
        }
        return (
            <Modal
            animationType = 'slide'
            transparent = {true}
            visible = {modalVisible}
            >
                <TouchableWithoutFeedback
                onPress = {() => setmodalVisible(false)}
                >
                    <View
                    style = {{
                        flex : 1 ,
                        alignItems : 'center',
                        justifyContent : 'center'
                    }}
                    >
                        <View
                        style = {{
                            height : 400 ,
                            width : SIZES.width * 0.8,
                            backgroundColor :  COLORS.lightGreen,
                            borderRadius : SIZES.radius
                        }}
                        >
                            <FlatList
                             data={areas}
                             renderItem={renderItem}
                             keyExtractor={(item) => item.code}
                             showsVerticalScrollIndicator={false}
                             style={{
                                 padding: SIZES.padding * 2,
                                 marginBottom: SIZES.padding * 2
                             }}
                            >

                            </FlatList>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
    return (
        <KeyboardAvoidingView
            style = {{flex : 1}}
        >
            <LinearGradient
            // colors = {[COLORS.lime , COLORS.emerald]}
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style = {{flex : 1}}
            >

            <ScrollView>
                {renderHeader()}
                {renderLogo()}
                {renderForm()}
                {renderButton()}
            </ScrollView>
            </LinearGradient>
            
            {/* scrolllview */}
            {renderAreaCodesModal()}

        </KeyboardAvoidingView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})
