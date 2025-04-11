import App from "../components/Home";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {
return <View style={[styles.container, { backgroundColor: 'rgba(16, 18, 22, 1)' }]} >
    <App />
</View>
}

const styles = StyleSheet.create({
    container:{

        backgroundColor: 'rgba(16, 18, 22, 1)',
        width: 390,
        height: 860,
    }
})