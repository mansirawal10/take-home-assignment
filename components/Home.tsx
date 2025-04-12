import { Animated, StyleSheet, View, Easing, ImageBackground, Dimensions } from 'react-native';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from './Profile';  

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const {height, width} = Dimensions.get("window");
export default function Home() {
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(slideAnim, {
          toValue: -20,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 20,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 4000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    
    <View style={styles.app}>
    <View style={styles.container}>
      {/* bg1 layer with gradient background */}
      <LinearGradient
        colors={['#27024D', '#101216']}
        style={styles.bg1}
      >
        <ImageBackground
          source={require('../assets/images/bg1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>

      {/* bg2 animated with gradient bg */}
      <Animated.View
        style={[
          styles.bg2,
          {
            transform: [{ translateX: slideAnim }],
          },
        ]}
      >
        <LinearGradient
          colors={['#27024D', '#101216']}
          style={StyleSheet.absoluteFill}
        />
        <ImageBackground
          source={require('../assets/images/bg2.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>
      <Profile />
    </View>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
    app: {
       backgroundColor: 'rgba(16, 18, 22, 1)',
       height: hp(40),
    width: wp(100),
    },
  container: {

    flex: 1,
    height: hp(100),
    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 0,
    backgroundColor: '#27024D', 
  },
  bg1: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    objectFit: 'cover',
    opacity: 0.2,
    
  },
  bg2: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -2,
    objectFit: 'cover',
    opacity: 0.3,
  
  },
  image: {
    width: wp(100),
      
  }
});


