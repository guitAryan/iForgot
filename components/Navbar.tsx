import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Button, } from 'react-native';

export const NavBar = () => {
    return (
        <View style={styles.navbar}>
            <Button
                title='Home'
                onPress={() => 1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        backgroundColor: '#cceaff',
        height: Dimensions.get('window').height * 0.1,
        width: Dimensions.get('window').width,
    },
})