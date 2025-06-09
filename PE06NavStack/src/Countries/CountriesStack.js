import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Countries from '../Countries/Countries';
import Country from '../Countries/CountryNav';
import { colors } from '../theme';

const Stack = createNativeStackNavigator();

export default function CountriesStackScreen(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        name="Countries"
        children={(screenProps) => (
          <Countries {...screenProps} countries={props.countries} />
        )}
      />
      <Stack.Screen name="Country" component={Country} />
    </Stack.Navigator>
  );
}
