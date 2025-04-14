import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Keerthi Turakapalli</Text>
      <Text style={styles.text}>MS Computer Science</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow', // Full page background
  },
  text: {
    color: 'black', // Text color
    padding: 10,
    margin: 5,
    fontSize: 18,
  },
});

export default App;
