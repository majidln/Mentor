import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../screens/index';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
