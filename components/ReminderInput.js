import React, { useState } from "react";
import ReminderItem from "./ReminderItem";
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ReminderInput = props => {
    const [enteredReminder, setEnteredReminder] = useState('');

    const reminderInputHandler = (enteredText) => {
        setEnteredReminder(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Reminder"
                style={styles.inputText}
                onChangeText={reminderInputHandler}
                value={enteredReminder}
            />
            <Button title="ADD" onPress={props.onAddReminder.bind(this, enteredReminder)} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
});

export default ReminderInput;