/**
 * My To Do List App
 *
 * Root component that displays the ToDoList and ToDoForm components
 *
 * @format
 */

// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native';
// import ToDoList from './components/ToDoList';
// import ToDoForm from './ToDoForm';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// export default function App() {
//   const [tasks, setTasks] = useState([
//   'Do laundry',
//   'Go to gym',
//   'Walk dog'
//   ]);

//   const addTask = (taskText) => {
//     setTasks([...tasks, taskText]);
//   };

//   const Stack = createStackNavigator();
  
//   return (
//   <NavigationContainer>
//     <SafeAreaView>
//       <ToDoList tasks={tasks} />
//       <ToDoForm addTask={addTask} />
//     </SafeAreaView>
//   </NavigationContainer>
//   );
// }

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

