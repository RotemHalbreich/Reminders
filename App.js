import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import ReminderItem from './components/ReminderItem';
import ReminderInput from './components/ReminderInput';

export default function App() {
  const [reminders, setReminders] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addReminderHandler = reminderTitle => {
    setReminders(currentReminders => [
      ...currentReminders,
      { id: Math.random().toString(), value: reminderTitle }
    ]);
    setIsAddMode(false);
  };

  const removeReminderHandler = reminderId => {
    setReminders(currentReminders => {
      return currentReminders.filter((reminder) => reminder.id !== reminderId);
    });
  };

  const cancelReminderAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add New Reminder"
        onPress={() => setIsAddMode(true)} />
      <ReminderInput
        visible={isAddMode}
        onAddReminder={addReminderHandler}
        onCancel={cancelReminderAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={reminders}
        renderItem={itemData => (
          <ReminderItem
            id={itemData.item.id}
            onDelete={removeReminderHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
