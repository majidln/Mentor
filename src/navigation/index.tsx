import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashboardScreen from './../screens/Dashboard';
import FormStepOneScreen from '../screens/UserForm/step1';
import FormStepTwoScreen from '../screens/UserForm/step2';
import EmployeeScreen from '../screens/Employee/manage';
import GroupListScreen from '../screens/Group/list';
import {HeaderIcon} from '../components/atomics';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        options={({navigation}) => ({
          title: 'Dashboard',
          headerRight: () => (
            <HeaderIcon
              title="Groups"
              onPress={() => navigation.navigate('GroupListScreen')}
            />
          ),
        })}
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
      <Stack.Screen
        name="GroupListScreen"
        component={GroupListScreen}
        options={({navigation}) => ({
          title: 'My Groups',
          headerRight: () => (
            <HeaderIcon
              title="Add new"
              onPress={() => navigation.navigate('EmployeeScreen')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default RootNavigation;
