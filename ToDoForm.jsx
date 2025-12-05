/**
 * ToDoForm Component
 *
 * Form with a text input and button to add new tasks
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import tasksData from './data/tasks.json';

export default function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const handleGenerateRandomTask = () => {
    if (tasks.length === 0) return;

    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];

    setTaskText(randomTask);
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />

      <View style={styles.buttonSpacing}>
        <Button
          title="Generate Random Task"
          onPress={handleGenerateRandomTask}
        />
      </View>

      <Button 
        title="Add Task"
        onPress={() => {
          if (taskText && taskText.trim() !== '') {
            addTask(taskText);
            setTaskText('');
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    gap: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
