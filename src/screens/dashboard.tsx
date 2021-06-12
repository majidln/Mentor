import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DashboardCard from './../components/screens/dashboard/card';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <DashboardCard
        title="Complete my Account"
        onPress={() => navigation.navigate('FormScreen')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 12,
    justifyContent: 'flex-end',
  },
});

export default HomeScreen;
