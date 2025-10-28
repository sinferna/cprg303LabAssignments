/**
 * My To Do List App
 *
 * Root component that displays the ToDoList and ToDoForm components
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
  return (
    <SafeAreaView >
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

