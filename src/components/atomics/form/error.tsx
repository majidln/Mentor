import React, {FC, ReactElement} from 'react';
import {Text, StyleSheet} from 'react-native';

import {colors} from './../../../styles';

export interface ErrorProps {
  error?: string;
}

export const Error: FC<ErrorProps> = ({error}): ReactElement => {
  if (!error) {
    return <></>;
  }
  return <Text style={styles.error}>{error}</Text>;
};

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    paddingVertical: 4,
    color: colors.error,
  },
});
