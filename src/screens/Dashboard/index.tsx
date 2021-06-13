import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DashboardCard from './../../components/screens/dashboard/card';
import DashboardUserInfo from './../../components/screens/dashboard/userInfo';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.wrapper}>
      <DashboardUserInfo />
      <DashboardCard
        title="Complete my Account"
        onPress={() => navigation.navigate('FormStepOneScreen')}
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
