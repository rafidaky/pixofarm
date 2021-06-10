import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../../screens/MapScreen';

const homeNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MapScreen">
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
};
export default homeNavigator;
