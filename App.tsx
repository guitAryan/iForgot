import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';
import Header from './components/Header'
import Interact from './components/Interact';
import NavBar from './components/Navbar';


export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Home")
  console.log("HEY BITCHES");

  return (
    <View style={styles.default}>
      <StatusBar translucent={false} style="light" />
      <Header />
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
});
