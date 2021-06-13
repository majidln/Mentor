import React, {FC, ReactElement} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';

import {RootState} from './../../../store/reducer';
import {KeyValue} from './../../atomics';

const IMAGE_SIZE = 120;

const DashboardUserInfo: FC = (): ReactElement => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.image}
          source={{uri: user.picture}}
          resizeMode="contain"
        />
      </View>
      <KeyValue label="First Name" value={user.firstName} />
      <KeyValue label="Last Name" value={user.lastName} />
      <KeyValue label="Job" value={user.jobTitle} />
      <KeyValue label="Department" value={user.department} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  imageWrapper: {
    alignItems: 'center',
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    borderRadius: IMAGE_SIZE / 2,
  },
});

export default DashboardUserInfo;
