import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './../screens/dashboard';
import FormScreen from './../screens/form';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
