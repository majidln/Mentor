import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DashboardCard from './../components/screens/dashboard/card';

function HomeScreen() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <DashboardCard title="Complete my Account" onPress={() => {}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 12,
    justifyContent: 'flex-end'
  },
});

export default HomeScreen;
