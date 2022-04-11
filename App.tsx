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
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    width: WINDOW_WIDTH,
  },
  interact: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    width: WINDOW_WIDTH,
  },
  navbar: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    width: WINDOW_WIDTH,
  },

});
