import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HistoryScreen from '../../screens/HistoryScreen';

const HistoryNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HistoryScreen">
      <Stack.Screen name="HistoryScreen" component={HistoryScreen} />
    </Stack.Navigator>
  );
};
export default HistoryNavigator;
