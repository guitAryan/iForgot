import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button, } from 'react-native';
import { AddToDo } from './AddToDo';

export const Interact = () => {
    let toDoList = [];

    return (
        <View style={styles.interact}>
            <Text>Interact Area</Text>
            <Button
                title='+ Add Task'
                onPress={AddToDo}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    interact: {
        alignItems: 'center',
        paddingLeft: 20,
        backgroundColor: '#fff8e3',
        height: Dimensions.get('window').height * 0.8,
        width: Dimensions.get('window').width,
    },
})