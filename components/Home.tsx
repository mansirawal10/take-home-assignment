import { Animated, StyleSheet, View, Easing, ImageBackground, ScrollView } from 'react-native';
import { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from './Profile';
import ToggleTabs from './ToggleTabs';

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
          source={require('@/assets/images/bg1.png')}
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
          source={require('@/assets/images/bg2.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>
      <Profile />      
    </View>
    <View>
    <ToggleTabs />
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
    app: {
       backgroundColor: 'rgba(16, 18, 22, 1)',
    },
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    height: 366.6,
    padding: 50,
    backgroundColor: '#27024D', 
  },
  bg1: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    objectFit: 'contain',
    justifyContent: 'center',
    opacity: 0.2,

  },
  bg2: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -2,
    justifyContent: 'center',
    alignItems: 'center',
    objectFit: 'contain',
    opacity: 0.3,
  },
  image: {
    width: 400,
      height: 366.6,
  }
});


