import React from 'react';
import { Text, Button, SafeAreaView } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  const today = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <SafeAreaView>
        <Text style={{ fontSize: 22, marginBottom: 10 }}>My To Do App</Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>Created by: Jasprit Grewal</Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>Date: {today}</Text>

        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </MainLayout>
  );
};

export default AboutScreen;
