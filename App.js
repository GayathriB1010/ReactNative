import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image,TouchableWithoutFeedback,Button,alert} from 'react-native';

export default function App() {
  const handlePress = () =>{
    console.log("test clicked")
  }
  return (
    <View style={styles.container}>
      <Text>Hello React Native!!</Text>
      <Text numberOfLines={1} onPress={() =>handlePress }>Testing text componentTesting text componentTesting text componentTesting text componentTesting text componentTesting text componentTesting text componentTesting text componentTesting text componentTesting text componentTesting text component</Text>
      <TouchableWithoutFeedback>
        <Image source={require('./assets/icon.png')}></Image>
        </TouchableWithoutFeedback>
        <Button title="clickMe" onPress={() => alert("Button clicked")}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
