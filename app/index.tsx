import App from "../components/App";
import { View, StyleSheet, Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { height, width } = Dimensions.get("window");

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#101216', // or any dark color to match your theme
  },
});
