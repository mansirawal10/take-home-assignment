import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Home from './Home'; // adjust the path if needed
import ToggleTabs from './ToggleTabs'; // adjust the path if needed
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


const {height, width} = Dimensions.get("window");
export default function App() {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Home />
      </View>

      <View style={styles.mid}>
        <ToggleTabs />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'rgba(16, 18, 22, 1)',
    paddingBottom: 5,
  },
  container: {
    width: wp(100),
  },
  mid: {
    width: wp(100),
  },
});
