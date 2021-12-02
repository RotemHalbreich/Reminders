import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const ReminderInput = props => {
    const [enteredReminder, setEnteredReminder] = useState('');

    const reminderInputHandler = (enteredText) => {
        setEnteredReminder(enteredText);
    };

    const addReminderHandler = () => {
        props.onAddReminder(enteredReminder);
        setEnteredReminder('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Reminder"
                    style={styles.inputText}
                    onChangeText={reminderInputHandler}
                    value={enteredReminder}
                />
                <View style={styles.inputButton}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="ADD"
                            onPress={addReminderHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal >
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    inputButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default ReminderInput;