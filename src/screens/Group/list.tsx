import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList, Button} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from './../../store/reducer';

function GroupListScreen() {
  const group = useSelector((state: RootState) => state.group);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>{JSON.stringify(group)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 12,
  },
  list: {
    flex: 1,
  },
});

export default GroupListScreen;
