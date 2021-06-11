import * as React from 'react';
import {View, Text} from 'react-native';

import {UserInput} from './../components/atomics';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <UserInput />
    </View>
  );
}

export default HomeScreen;
