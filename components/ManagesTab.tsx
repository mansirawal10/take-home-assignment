import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { height, width } = Dimensions.get("window");

export default function ManageTags() {


  return (


    <View style={styles.Container}>
      <Text style={styles.top}>
        our recommendations work best when you let us know these things:
      </Text>

      <View style={styles.first}>
        <Text style={styles.sectionTitle}>YOUR DIFFICULTY ✨</Text>
        <Text style={styles.sectionSubtitle}>you decide the level of challenge you want!</Text>
      </View>

      <View style={styles.second}>
        <Text style={styles.sectionTitle}>INTERESTS YOU LIKE ✨</Text>
        <Text style={styles.sectionSubtitle}>we’ll use these to show you cool builds</Text>
      </View>

      <View >
        <Text style={styles.sectionTitle}>TOOLS USED 🛠️</Text>
        <Text style={styles.sectionSubtitle}>we’ll suggest better using these picks.</Text>
      </View>

      <View />

      <View style={styles.bar}>
        <Image source={require('../assets/images/bar.png')} />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({

  Container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: wp(100),
    height: 520.4,
    backgroundColor: 'rgba(16, 18, 22, 1)',
    position: 'absolute',
    top: 50,
    left: 0,
    

  },
  top: {
    color: 'rgba(163, 163, 163, 1)',
    paddingTop: 10,
    fontFamily: 'CircularStd-Light',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: 20,
    lineHeight: 30.2,
    paddingLeft: 20,
    paddingRight: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: 'rgba(163, 163, 163, 1)',
    lineHeight: 30.2,
    marginTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,

  },
  sectionSubtitle: {
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'rgba(163, 163, 163, 1)',
    paddingBottom: 30,
  },
  first: {
    borderBottomWidth: 0.3,
    borderColor: 'rgb(147, 144, 144)',
  },
  second: {
    borderBottomWidth: 0.3,
    borderColor: 'rgb(147, 144, 144)',
  },

  bar: {
    position: 'absolute',
    bottom: 0,
    width: wp(100),
    height: 50, // or however tall your bar is
    zIndex: 10,
  },
})