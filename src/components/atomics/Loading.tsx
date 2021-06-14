import React, {FC, ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// TODO add spinkit loading
export const Loading: FC = (): ReactElement => {
  return (
    <View style={styles.wrapper}>
      <Text>Loading ....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
});
