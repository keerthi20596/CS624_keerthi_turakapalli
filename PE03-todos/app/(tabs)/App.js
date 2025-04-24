import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

export default function App() {
  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      Alert.alert('Please enter a task.');
      return;
    }
    const newTask = { id: Date.now().toString(), text: inputValue, done: false };
    setTasks(prevTasks => [...prevTasks, newTask]);
    console.log('Added Task:', newTask);
    setInputValue('');
  };

  const markDone = (id) => {
    const updatedTasks = tasks.map(task => task.id === id ? { ...task, done: !task.done } : task);
    setTasks(updatedTasks);
    const action = updatedTasks.find(task => task.id === id)?.done ? 'marked done' : 'marked active';
    console.log(`Task ${id} ${action}`);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    console.log('Deleted Task ID:', id);
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={[styles.taskText, item.done && styles.doneText]}>{item.text}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => markDone(item.id)}>
          <Text style={styles.doneBtn}>{item.done ? 'Undo' : 'Done'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTask(item.id)}>
          <Text style={styles.deleteBtn}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>todos</Text>
      <TextInput
        style={styles.input}
        placeholder="What needs to be done?"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 40,
    textAlign: 'center',
    color: '#d3bebe',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  submitBtn: {
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  submitText: {
    fontSize: 16,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  doneBtn: {
    color: 'green',
    marginRight: 10,
  },
  deleteBtn: {
    color: 'red',
  },
});
