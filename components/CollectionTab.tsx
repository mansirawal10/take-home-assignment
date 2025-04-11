import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


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
        width: 400,
        height: 520.4,
        backgroundColor: 'rgba(16, 18, 22, 1)',
        position: 'absolute',
        top: 55,
        left: 0,
    },
    Liked:{
        paddingTop: 15,
        paddingLeft: 10,
        
    },
    Save:{
        paddingTop: 15,
        paddingRight: 10,
    },
    Files:{
        paddingBottom: 80,
        paddingLeft: 10,
    },
    bar: {
        position: 'absolute',
        bottom: 0,
    },



});
