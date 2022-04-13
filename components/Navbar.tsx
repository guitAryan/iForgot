import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Button, } from 'react-native';

const NavBar = () => {
    return (
        <View style={styles.navbar}>
            <Button
                title='Home'
                onPress={() => console.log("This button works")}
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

export default NavBar;