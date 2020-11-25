/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image,ImageBackground, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import Images from "../constants/Images";

export default class Onboarding extends Component {
    render() {
        return (
            <View>
                <ImageBackground
                    source={Images.Onboarding}
                    style={{ width: '100%', height: '100%' }}>

                    <View style={styles.logocontainer}>
                        <Image
                         source={Images.ArgonLogo}
                         style={styles.DesignSystem}
                          ></Image>
                    </View>
                    <View style={styles.Designsystemcontainer}>
                        <Text style={styles.DesignSystem}>
                            Design 
                        </Text>    
                        <Text style={styles.DesignSystem}>
                            System
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.Body}> Fully coded React Native Components</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text >Get Started</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    logocontainer:{
        alignItems:"center",
        justifyContent:"center",
        marginTop:120
    },
    argon: {
        fontSize: 20,
        alignItems:"center",
    },
    Designsystemcontainer:{
        marginTop: 200,
        marginLeft:40
    },

    DesignSystem:{
        fontSize:60,
        color: 'white',
        
    },
    button:{
        backgroundColor:"white",
        borderRadius:60,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:40,
        marginRight:40,
        marginTop:50
    },
    Body:{
        fontSize:16,
        color: 'white',
        marginLeft:40,
        marginTop:60

    }

})