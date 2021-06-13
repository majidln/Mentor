import React, {FC, ReactElement} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from './../../../store/reducer';
import {KeyValue, Avatar} from './../../atomics';

const DashboardUserInfo: FC = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.wrapper}>
      <Avatar picture={user.picture} />
      <KeyValue label="First Name" value={user.firstName} />
      <KeyValue label="Last Name" value={user.lastName} />
      <KeyValue label="Job" value={user.jobTitle} />
      <KeyValue label="Department" value={user.department} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  
});

export default DashboardUserInfo;
