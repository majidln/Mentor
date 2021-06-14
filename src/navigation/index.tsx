import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './../screens/Dashboard';
import FormStepOneScreen from '../screens/UserForm/step1';
import FormStepTwoScreen from '../screens/UserForm/step2';
import EmployeeScreen from '../screens/Employee/manage';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        options={{title: 'Dashboard'}}
        name="Dashboard"
        component={DashboardScreen}
      />
      <Stack.Screen
        options={{title: 'Personal Information'}}
        name="FormStepOneScreen"
        component={FormStepOneScreen}
      />
      <Stack.Screen
        options={{title: 'Job Information'}}
        name="FormStepTwoScreen"
        component={FormStepTwoScreen}
      />
      <Stack.Screen
        options={{title: 'Create Group'}}
        name="EmployeeScreen"
        component={EmployeeScreen}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
