import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => (
  <Text style={{ textAlign: 'center', padding: 10, opacity: 0.6 }}>
    © 2025 ToDo App
  </Text>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
