import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './../screens/dashboard';
import FormScreen from './../screens/form';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen options={{title: "Dashboard"}} name="Dashboard" component={DashboardScreen} />
      <Stack.Screen options={{title: "Personal Info"}} name="FormScreen" component={FormScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
