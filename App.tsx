import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

function Header(title: string) {
  return (
    <View style={styles.header}>
      <Text>Header Area: {title}</Text>

    </View>
  )
}

function Interact() {
  return (
    <View style={styles.interact}>
      <Text>Interaction Area: </Text>
    </View>
  )
}

function NavBar() {

  return (
    <View style={styles.navbar}>
      <Button
        title='Home'
        onPress={() => Header('Home')}

      />
    </View>
  )
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home")

  return (
    <View style={styles.default}>
      <StatusBar translucent={false} style="light" />
      <Header {...currentScreen} />
      <Interact />
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: '#fff5e3',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#cceaff',
    height: WINDOW_HEIGHT * 0.1,
    width: WINDOW_WIDTH,
  },
  interact: {
    alignItems: 'center',
    height: WINDOW_HEIGHT * 0.8,
    width: WINDOW_WIDTH,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#cceaff',
    // position: 'absolute'
    height: WINDOW_HEIGHT * 0.1,
    width: WINDOW_WIDTH,
  },
});
