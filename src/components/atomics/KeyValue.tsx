import React, {FC, ReactElement} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export interface KeyValueProps {
  label?: string;
  value?: string;
}

export const KeyValue: FC<KeyValueProps> = ({
  label = '',
  value = '',
}): ReactElement => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    paddingRight: 4
  },
  value: {
    fontSize: 16,
    fontWeight: '700',
  },
});
