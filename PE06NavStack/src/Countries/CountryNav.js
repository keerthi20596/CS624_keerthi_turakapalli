import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const Country = ({ route }) => {
  const { countryName, currency, used } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{countryName}</Text>
      <Text style={styles.currency}>Currency: {currency}</Text>
      <Text style={styles.used}>Currency used: {used ? 'Yes' : 'No'}</Text>
    </View>
  );
};

export default Country;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  currency: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
  used: {
    fontSize: 20,
    color: 'white',
  },
});
