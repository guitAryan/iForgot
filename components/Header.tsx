import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Header Area</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'flex-start',
        backgroundColor: '#cceaff',
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width,
    },
})
