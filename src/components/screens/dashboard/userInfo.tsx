import React, {FC, ReactElement} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import Share, {ShareOptions} from 'react-native-share';

import {RootState} from './../../../store/reducer';
import {KeyValue, Avatar} from './../../atomics';

const DashboardUserInfo: FC = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user);

  const shareAccount = () => {
    console.log('share profile', user);
    const options: ShareOptions = {
      title: user.firstName + ' ' + user.lastName + ' Profile',
      subject: 'Share profile with mentors',
      message: `${user.firstName} ${user.lastName}\n
        Job: ${user.jobTitle}\n
        Department ${user.department}\n
        Location ${user.location}
      `,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  if (!(user.firstName && user.jobTitle)) {
    // the user profile is not complete yet
    return <Text>User account not complete</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <Avatar picture={user.picture} />
      <KeyValue label="First Name" value={user.firstName} />
      <KeyValue label="Last Name" value={user.lastName} />
      <KeyValue label="Job" value={user.jobTitle} />
      <KeyValue label="Department" value={user.department} />
      <View style={styles.shareWrapper}>
        <Button title="Share this account" onPress={shareAccount} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  shareWrapper: {
    flexDirection: 'row-reverse',
    paddingVertical: 10,
  }
});

export default DashboardUserInfo;
