/**
 * ToDoList Component
 *
 * Displays a hardcoded list of tasks
 *
 * @format
 */

import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

export default function ToDoList() {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Go to pilates</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={styles.task}>
          <Text style={styles.taskText}>Go shopping</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Dinner with Bob</Text>
        </View>
      </Pressable>
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
