import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Entry from '../../screens/Entry';

const authNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Entry">
      <Stack.Screen name="Entry" component={Entry} />
    </Stack.Navigator>
  );
};
export default authNavigator;
