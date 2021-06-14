import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from './../../store/reducer';
import GroupItem from './../../components/screens/Group/item'

function GroupListScreen() {
  const groups = useSelector((state: RootState) => state.group);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={groups}
        renderItem={({item}) => <GroupItem group={item} />}
        keyExtractor={(_, index) => index.toString()}
      />
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
