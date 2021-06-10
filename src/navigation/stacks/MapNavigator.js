import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from '../../screens/MapScreen';
import CameraScreen from '../../screens/Camera';
import OnLoad from '../../screens/OnLoad';

const MapNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="OnLoad">
      <Stack.Screen
        options={{headerShown: false}}
        name="OnLoad"
        component={OnLoad}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="MapScreen"
        component={MapScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="CameraScreen"
        component={CameraScreen}
      />
    </Stack.Navigator>
  );
};
export default MapNavigator;
