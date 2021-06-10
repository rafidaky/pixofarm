import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthNavigator from './stacks/authNavigator';
import MapNavigator from './stacks/MapNavigator';
import HistoryNavigator from './stacks/HistoryNavigator';
import {useSelector} from 'react-redux';

const tabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const isLoggedIn = useSelector(state => state.loggedIn);

  return isLoggedIn === false ? (
    <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
      <Tab.Screen
        options={{tabBarVisible: false}}
        name="AuthNavigator"
        component={AuthNavigator}
      />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
      <Tab.Screen name="MapNavigator" component={MapNavigator} />
      <Tab.Screen name="HistoryNavigator" component={HistoryNavigator} />
    </Tab.Navigator>
  );
};

export default tabNavigator;
