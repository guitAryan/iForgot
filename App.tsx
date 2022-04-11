import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

function Header() {
  return (
    <View style={styles.header}>
      <Text>Header Area</Text>

    </View>
  )
}

function Interact() {
  return (
    <View style={styles.interact}>
      <Text>Interaction Area</Text>

    </View>
  )
}

function NavBar() {
  return (
    <View style={styles.navbar}>
      <Text>Nav bar</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.default}>
      <Header />
      <Interact />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#ffdbc2',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    borderWidth: 1,
    height: WINDOW_HEIGHT * 0.1,
    width: WINDOW_WIDTH,
  },
  interact: {
    alignItems: 'center',
    borderWidth: 1,
    height: WINDOW_HEIGHT * 0.8,
    width: WINDOW_WIDTH,
  },
  navbar: {
    alignItems: 'center',
    borderWidth: 1,
    height: WINDOW_HEIGHT * 0.1,
    width: WINDOW_WIDTH,
  },

});
