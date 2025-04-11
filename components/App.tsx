import { View, StyleSheet } from 'react-native';
import Home from './Home'

export default function App() {
  return (
    <View style={styles.app}>
      <Home />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
     backgroundColor: 'rgba(16, 18, 22, 1)',
     width: 400, 
     height: 860,
  },
})
