/**
 * ToDoList Component
 *
 * Displays a hardcoded list of tasks
 *
 * @format
 */

import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

export default function ToDoList({ tasks }) {

  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <View key={index}>
          <Text>{task}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  completed: {
    backgroundColor: '#f2f2f2',
  },
  taskText: {
    fontSize: 16,
  },
});
