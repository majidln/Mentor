import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import {RootState} from './../store/reducer';
import DashboardCard from './../components/screens/dashboard/card';
import DashboardUserInfo from './../components/screens/dashboard/userInfo';

function HomeScreen() {
  const navigation = useNavigation();
  const user = useSelector((state: RootState) => state.user);

  return (
    <SafeAreaView style={styles.wrapper}>
      <DashboardUserInfo />
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
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
