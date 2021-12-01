import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ReminderItem from './components/ReminderItem';
import ReminderInput from './components/ReminderInput';

export default function App() {
  const [reminders, setReminders] = useState([]);

  const addReminderHandler = reminderTitle => {
    setReminders(currentReminders => [...currentReminders, { id: Math.random().toString(), value: reminderTitle }]);
  };

  return (
    <View style={styles.screen}>
      <ReminderInput onAddReminder={addReminderHandler}/>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={reminders}
        renderItem={itemData => <ReminderItem title={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
