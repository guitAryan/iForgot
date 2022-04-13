import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, } from 'react-native';

const Interact = () => {
    return (
        <View style={styles.interact}>
            <Text>Header Area: </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    interact: {
        alignItems: 'center',
        backgroundColor: '#fff8e3',
        height: Dimensions.get('window').height * 0.8,
        width: Dimensions.get('window').width,
    },
})

export default Interact;