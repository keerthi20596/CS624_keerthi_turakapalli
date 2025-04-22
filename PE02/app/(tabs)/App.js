import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  const capstoneCourse = 'CS 690 Master’s Capstone Project';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.centered}>
        <Image source={require('./icon.png')} style={styles.icon} />
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.label}>Which course did you like?</Text>
        <TextInput
          style={styles.input}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
        />
      </View>

      <Text style={styles.sectionHeader}>Core Requirements (24 credits)</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.sectionHeader}>Depth of Study (6 credits)</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.sectionHeader}>Capstone (6 credits)</Text>
      <Text style={styles.courseText}>{capstoneCourse}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  centered: {
    alignItems: 'center',
    marginVertical: 16,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  inputSection: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    padding: 10,
  },
  sectionHeader: {
    backgroundColor: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 20,
  },
  courseText: {
    fontSize: 16,
    paddingVertical: 4,
  },
});

export default App;
