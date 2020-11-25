/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image,ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Images from "../constants/Images";

export default class Onboarding extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={Images.RegisterBackground}
                    style={{ width: '100%', height: '100%' }}>
                    <View
                    style={styles.container}>

                    
                    
                    <TouchableOpacity
                        style={styles.button}>
                        <Text style={styles.getstarted} >Create Account</Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    container:{
        height:700,
        backgroundColor:"white",
        marginBottom:50,
        marginLeft:40,
        marginRight:40,
        marginTop:50,
        borderRadius:50
    },
    button: {
        backgroundColor:"purple",
        borderRadius:60,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:40,
        marginRight:40,
        marginTop:600,
        marginBottom:50

    },
    getstarted:{
        color:'white',
        fontSize:15,
        
    }

})