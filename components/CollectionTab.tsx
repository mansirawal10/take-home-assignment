import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("window");

export default function Collection() {

    return (
        <View style={styles.Container}>
            <View style={styles.Liked}>
                <Image source={require('../assets/images/Liked.png')} />
            </View>
            <View style={styles.Save}>
                <Image source={require('../assets/images/Save.png')} />
            </View>
            <View style={styles.Files}>
                <Image source={require('../assets/images/Files.png')} />
            </View>
             <View style={styles.bar}>
                            <Image source={require('../assets/images/bar.png')} />
                        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 4,
        width: wp(100),
        height: 520.4,
        backgroundColor: 'rgba(16, 18, 22, 1)',
        
    },
    Liked:{
        paddingTop: 15,
        paddingLeft: 18,
        
    },
    Save:{
        paddingTop: 15,
        paddingRight: 18,
    },
    Files:{
        paddingTop: 15,
        paddingBottom: 30,
        paddingLeft: 18,
    },
    bar: {
        position: 'absolute',
        bottom: 0,
        width: wp(100),
        height: 50, // or however tall your bar is
        zIndex: 10,
      },



});
