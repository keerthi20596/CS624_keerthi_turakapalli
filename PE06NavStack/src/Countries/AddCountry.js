import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid';
import { colors } from '../theme';

const AddCountry = ({ addCountry, navigation }) => {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const submit = () => {
    if (name === '' || currency === '') {
      alert('Please complete the form');
      return;
    }
    const newCountry = {
      id: uuid.v4(),
      name,
      currency,
    };
    addCountry(newCountry);
    setName('');
    setCurrency('');
    navigation.navigate('Countries');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput
        placeholder="Country name"
        onChangeText={setName}
        value={name}
        style={styles.input}
      />
      <TextInput
        placeholder="Currency"
        onChangeText={setCurrency}
        value={currency}
        style={styles.input}
      />
      <TouchableOpacity onPress={submit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddCountry;

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50,
  },
});
