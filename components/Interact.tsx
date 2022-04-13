import React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, Button, } from 'react-native';
import AddToDo from './AddToDo';

const Interact = () => {
    let toDoList = [];



    return (
        <View style={styles.interact}>
            <Text>Header Area: </Text>
            <Button
                title='+ Add Task'
                onPress={AddToDo}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    interact: {
        alignItems: 'flex-start',
        paddingLeft: 20,
        backgroundColor: '#fff8e3',
        height: Dimensions.get('window').height * 0.8,
        width: Dimensions.get('window').width,
    },
})

export default Interact;