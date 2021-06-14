import React, {FC, ReactElement} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

export interface HeaderIconProps extends TouchableOpacityProps {
  title?: string;
}

export const HeaderIcon: FC<HeaderIconProps> = ({
  title = '',
  ...rest
}): ReactElement => {
  return (
    <TouchableOpacity style={styles.wrapper} {...rest}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
});
