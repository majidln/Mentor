import React, {FC, ReactElement} from 'react';
import {Text, StyleSheet} from 'react-native';

import {colors} from './../../../styles';

export interface InputLabelProps {
  label?: string;
  error?: string;
}

export const InputLabel: FC<InputLabelProps> = ({
  label = '',
  error = '',
}): ReactElement => {
  if (!label) {
    return <></>;
  }
  return (
    <Text style={{...styles.label, ...(error ? styles.labelError : {})}}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    paddingVertical: 4,
  },
  labelError: {
    color: colors.error,
  },
});
