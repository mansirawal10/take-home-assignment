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

      <View style={styles.third}>
        <Text style={styles.sectionTitle}>TOOLS USED 🛠️</Text>
        <Text style={styles.sectionSubtitle}>we’ll suggest better using these picks.</Text>
      </View>

      <View/>

      <Image
        source={require('../assets/images/bar.png')}
        style={styles.bar}
      />
    </View>


  );
}

const styles = StyleSheet.create({

  Container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    width: 400,
    height: 520.4,
    backgroundColor: 'rgba(16, 18, 22, 1)',
    position: 'absolute',
    top: 55,
    left: 0,
    fontStyle: 'normal',


  },
  top: {
    color: 'rgba(163, 163, 163, 1)',
    paddingTop: 50,
    fontFamily: 'Circular Std',
  fontStyle: 'normal',
  fontWeight: 300,
  fontSize: 20,
  paddingLeft: 10,
  paddingRight: 10,
},
  sectionTitle: {
  fontSize: 14,
  color: 'rgba(163, 163, 163, 1)',
  marginTop: 25,
  paddingLeft: 10,
  paddingRight: 10,

},
  sectionSubtitle: {
  fontSize: 12,
  paddingTop: 5,
  paddingLeft: 10,
    paddingRight: 10,
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
  third: {
  borderBottomWidth: 0.3,
  borderColor: 'rgb(147, 144, 144)',
},
bar: {
  position: 'absolute',
  bottom: 0,
},
})